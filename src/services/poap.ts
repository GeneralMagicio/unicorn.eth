import { OsNft } from '@/app/dashboard/utils/nft-balance-opensea'

import { axiosInstance } from './axiosInstance'

export const getUserPOAPs = async (address: string): Promise<OsNft[]> => {
  const res = await axiosInstance.get<{ data: PoapResponse[] }>(
    `poap/user/${address}`
  )

  return res.data?.data?.map(
    ({
      description,
      image_url,
      name,
      token_standard,
      updated_at,
      metadata,
    }) => ({
      collection: 'POAP',
      contract: '',
      description,
      floorPrice: 0,
      image_url,
      opensea_url: '',
      identifier: '',
      is_disabled: false,
      is_nsfw: false,
      metadata,
      name,
      token_standard,
      updated_at,
    })
  )
}

export function postEventQRCodes(token: string) {
  return axiosInstance
    .post<{ data: Array<{ claimed: boolean; qr_hash: string }> }>(
      `poap/event/qr-codes`,
      undefined,
      {
        headers: { Authorization: `${token}` },
      }
    )
    .then((res) => res.data)
}

export function getActionsClaimQr(params: { qr_hash: string }, token: string) {
  return axiosInstance
    .get<{ data: { secret: string } }>('poap/actions/claim-qr', {
      params,
      headers: { Authorization: `${token}` },
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
    .post<boolean>('poap/actions/claim-qr', body, {
      headers: { Authorization: `${token}` },
    })
    .then((res) => res.data)
}

export function getActionsScan(params: { address: string }) {
  return axiosInstance
    .get<{
      data: {
        owner?: string
        error?: string
      }
    }>(`poap/actions/scan/${params.address}`, {
      params,
    })
    .then((res) => res.data)
}

export function postOauthToken() {
  return axiosInstance
    .post<{ data: { access_token: string } }>('poap/oauth/token')
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
      secret: data?.data.secret,
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
