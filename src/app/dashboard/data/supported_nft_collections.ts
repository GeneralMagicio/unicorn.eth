import { SupportedChainIds } from './supported_tokens'

export type SupportedNFT = {
  symbol: string
  addresses: {
    chainId:
      | SupportedChainIds.Mainnet
      | SupportedChainIds.Polygon
      | SupportedChainIds.BSC
    address: string
  }[]
  name: string
  website: string
  logo: {
    src: string
    width: number
    height: number
    ipfs_hash: string
  }
}

// @ts-ignore
// export const supportedNFTs: SupportedNFT[] = data.data.collections.map((item) => ({
//   symbol: item.symbol,
//   name: item.name,
//   addresses: [
//     {
//       chainId:
//         item.blockchain === 'Ethereum'
//           ? SupportedChainIds.Mainnet
//           : item.blockchain === 'Polygon'
//             ? SupportedChainIds.Polygon
//             : item.blockchain === 'BNB Chain'
//               ? SupportedChainIds.BSC
//               : SupportedChainIds.Mainnet,
//       address: item.contractAddress,
//     },
//   ],
//   logo: {src: item.logo || '', width: -1, height: -1, ipfs_hash: ''},
//   website: item.website || '',
// }))

export const supportedNFTs: SupportedNFT[] = [
  {
    symbol: 'CKITTY',
    name: 'CryptoKitties',
    addresses: [
      {
        chainId: SupportedChainIds.Mainnet,
        address: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      },
    ],
    logo: {
      src: 'https://image.nftscan.com/eth/logo/0x06012c8cf97bead5deae237070f9587f8e7a266d.png',
      width: -1,
      height: -1,
      ipfs_hash: '',
    },
    website: 'https://www.cryptokitties.co/',
  },
]
