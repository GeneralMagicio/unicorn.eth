import { OsNft } from '@/app/dashboard/utils/nft-balance-opensea'
import axios from 'axios'
import { API_KEYS } from './api-keys'
import { axiosInstance } from './axiosInstance'

export const getUserPOAPs = async (address: string): Promise<OsNft[]> => {
  const res = await axiosInstance.get<PoapResponse[]>(`poap/scan/${address}`)

  return res.data.map(({ event, created, tokenId }) => ({
    collection: 'POAP',
    contract: '',
    description: event.description,
    floorPrice: 0,
    image_url: event.image_url,
    opensea_url: '',
    identifier: tokenId,
    is_disabled: false,
    is_nsfw: false,
    metadata: {
      name: event.name,
      description: event.description,
      image: event.image_url,
      attributes: [],
    },
    name: event.name,
    token_standard: 'ERC721',
    updated_at: created,
  }))
}

export function postEventQRCodes(token: string) {
  return axiosInstance
    .post<Array<{ claimed: boolean; qr_hash: string }>>(
      `/event/${process.env.POAP_EVENT_ID || API_KEYS.POAP_EVENT_ID}/qr-codes`,
      {
        secret_code:
          process.env.POAP_EVENT_SECRET || API_KEYS.POAP_EVENT_SECRET,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data)
}

export function getActionsClaimQr(params: { qr_hash: string }, token: string) {
  return axiosInstance
    .get<{ secret: string }>('/actions/claim-qr', {
      params,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
}

export function postActionsClaimQr(
  body: {
    address: string
    qr_hash: string
    secret: string
    sendEmail: boolean
  },
  token: string
) {
  return axiosInstance
    .post<boolean>('/actions/claim-qr', body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
}

export function getActionsScan(params: { address: string }) {
  return axiosInstance
    .get<{
      owner?: string
      error?: string
    }>(
      `/actions/scan/${params.address}/${
        process.env.POAP_EVENT_ID || API_KEYS.POAP_EVENT_ID
      }`,
      {
        params,
      }
    )
    .then((res) => res.data)
}

export function postOauthToken() {
  return axiosInstance
    .post<{ access_token: string }>('poap/oauth/token')
    .then((res) => res.data)
}

export async function mint({
  token,
  address,
  mintLink,
}: {
  token: string
  address: string
  mintLink: { qr_hash: string; claimed: boolean }
}) {
  const data = await poapService.getActionsClaimQr(
    {
      qr_hash: mintLink.qr_hash,
    },
    token
  )

  // const secret = await axios
  //   .get<{ secret: string }>(`/api/poap/claim-qr`, {
  //     params: {
  //       qr_hash: mintLink.qr_hash,
  //       token,
  //     },
  //   })
  //   .then((res) => res.data.secret)
  return poapService.postActionsClaimQr(
    {
      address: address,
      qr_hash: mintLink?.qr_hash,
      secret: data.secret,
      sendEmail: false,
    },
    token
  )

  // return axios.post<{ secret: string }>('/api/poap/claim-qr', null, {
  //   params: {
  //     address: address,
  //     qr_hash: mintLink?.qr_hash,
  //     secret: secret,
  //     token,
  //   },
  // })
}
export const poapService = {
  postOauthToken,
  postEventQRCodes,
  postActionsClaimQr,
  getActionsClaimQr,
  getActionsScan,
  getUserPOAPs,
  mint,
}
