export interface ICryptoToken {
  name: string
  price: number
  value: number
  icon: string
}

export type Collectible =  {
  id: number;
  org: string;
  name: string;
  floorPrice: number;
  description: string;
  about: string;
  website: string;
  img: string;
}