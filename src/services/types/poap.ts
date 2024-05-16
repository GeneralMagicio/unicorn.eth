interface PoapResponse {
  collection: string
  contract: string
  description: string
  floorPrice: number
  image_url: string
  opensea_url: string
  identifier: string
  is_disabled: boolean
  is_nsfw: boolean
  metadata: {
    name: string
    description: string
    image: string
    attributes: { value: string; trait_type: string }[]
  }
  name: string
  token_standard: string
  updated_at: string
}
