import { Collectible, ICryptoToken } from '@/services/types'
import { axiosInstance } from '@/services/axiosInstance'
import { supportedTokens } from '../data/supported_tokens'
import { trimString } from './index'
import { OsNft } from './nft-balance-opensea'

export const createCryptoTokenObject = (
  balances: Record<string, number>,
  prices: Record<string, number>
) => {
  const result: ICryptoToken[] = []
  for (const symbol in balances) {
    const balance = balances[symbol]
    const tokenInfo = supportedTokens.find((item) => item.symbol === symbol)
    if (!tokenInfo || balance <= 0) continue
    result.push({
      name: tokenInfo.name,
      icon: tokenInfo?.logo?.src || '/img/ens.png',
      price: prices[symbol],
      value: balance,
      symbol,
      description: tokenInfo.description,
      website: tokenInfo.website,
    })
  }

  return result.sort((a, b) => b.price * b.value - a.price * a.value)
}

export const createCollectibleObject = (nfts: OsNft[]) => {
  const result: Collectible[] = []
  for (const nft of nfts) {
    result.push({
      id: `${nft.collection}-${nft.identifier}`,
      org: nft.collection,
      name: nft.name || '',
      floorPrice: nft.floorPrice,
      description: trimString(nft.description || '', 100),
      about: trimString(nft.metadata?.description || '', 40),
      website: nft.metadata?.external_url || '',
      OsUrl: nft.opensea_url,
      img: nft.image_url || '',
    })
  }

  return result.sort((a, b) => b.floorPrice - a.floorPrice)
}

export const fetchTokenPrices = async () => {
  const url = 'https://unicorn.melodicdays.shop/pricing/all'
  const res = await axiosInstance.get<Record<string, number>>(url)

  return res.data
}
