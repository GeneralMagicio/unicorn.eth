export interface ICryptoToken {
  name: string
  price: number
  value: number
  icon: string
  address?: string
  decimals?: number
  symbol?: string
}

export type Collectible =  {
  id: string;
  org: string;
  name: string;
  floorPrice: number;
  description: string;
  about: string;
  website: string;
  img: string;
  OsUrl: string;
}
