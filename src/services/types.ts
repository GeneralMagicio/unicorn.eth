export interface ICryptoToken {
  name: string
  price: number
  value: number
  icon: string
  chain?: any // TODO: CHANGE THIS TO A VALID TYPE
  abi?: any // TODO: CHANGE THIS TO A VALID TYPE
  address?: string
  decimals?: number
  symbol?: string
  amount?: number
}

export type Collectible = {
  id: string
  org: string
  name: string
  floorPrice: number
  description: string
  about: string
  website: string
  img: string
  OsUrl: string
}
