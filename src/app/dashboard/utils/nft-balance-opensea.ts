import { axiosInstance } from '@/services/axiosInstance'
import { SupportedChainIds, getChainIds } from '../data/supported_tokens'

export interface OsNftResponse {
  identifier: string
  collection: string
  contract: string
  token_standard: string
  name: string | null
  description: string | null
  image_url: string | null
  metadata_url: string | null
  opensea_url: string
  updated_at: string
  is_disabled: boolean
  is_nsfw: boolean
}

export interface OsNft extends Omit<OsNftResponse, 'metadata_url'> {
  metadata: {
    name: string
    image: string
    description: string
    attributes: { value: string; trait_type: string }[]
    external_url?: string
  } | null
}

type ChainName =
  | 'ethereum'
  | 'optimism'
  | 'matic'
  | 'bsc'
  | 'gnosis'
  | 'base'
  | 'arbitrum'

function getChainNameForOS(chainId: SupportedChainIds): ChainName {
  switch (chainId) {
    case SupportedChainIds.Mainnet:
      return 'ethereum'
    case SupportedChainIds.Arbitrum:
      return 'arbitrum'
    case SupportedChainIds.OP:
      return 'optimism'
    case SupportedChainIds.Polygon:
      return 'matic'
    case SupportedChainIds.Base:
      return 'base'
    case SupportedChainIds.BSC:
      return 'bsc'
    case SupportedChainIds.Gnosis:
      return 'gnosis'
    default:
      return 'ethereum'
  }
}

const addMetadataToNfts = (nfts: OsNftResponse[]) => {
  return nfts.map(async ({ metadata_url, ...item }) => {
    if (!metadata_url) return { ...item, metadata: null }

    try {
      const metadata = (
        await axiosInstance.get<OsNft['metadata']>(metadata_url)
      ).data
      return { ...item, metadata }
    } catch (e) {
      return { ...item, metadata: null }
    }
  })
}

export async function findAllNFTsOsApi(
  walletAddress: string,
  limit: number = 10
) {
  let nfts: OsNft[] = []
  for (const chain of getChainIds()) {
    try {
      const res = await axiosInstance.get<{ nfts: OsNftResponse[] }>(
        `https://api.opensea.io/api/v2/chain/${getChainNameForOS(
          chain
        )}/account/${walletAddress}/nfts`,
        {
          headers: {
            'x-api-key': 'd339363f19444a649ff0d29965f58b2e',
          },
          params: {
            limit,
          },
        }
      )
      const nftsWithMetadata: OsNft[] = await Promise.all(addMetadataToNfts(res.data.nfts))
      nfts = [...nfts, ...nftsWithMetadata]
      if (nfts.length >= limit) return nfts
    } catch (e) {
      console.error(e)
    }
  }

  return nfts
}
