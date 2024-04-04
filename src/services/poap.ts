import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.POAP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'X-API-Key': process.env.POAP_API_KEY,
  },
})

export function postEventQRCodes(token: string) {
  return axiosInstance
    .post<boolean>(
      `/event/${process.env.POAP_EVENT_ID}/qr-codes`,
      { secret_code: process.env.POAP_EVENT_SECRET },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data)
}

export function getActionsClaimQr(params: { qr_hash: string }, token: string) {
  return axiosInstance
    .get<boolean>('/actions/claim-qr', {
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
    .get<boolean>(
      `/actions/scan/${params.address}/${process.env.POAP_EVENT_ID}`,
      {
        params,
      }
    )
    .then((res) => res.data)
}

export function postOauthToken() {
  return axiosInstance
    .post<boolean>(
      '/oauth/token',
      {
        audience: 'https://api.poap.tech',
        grant_type: 'client_credentials',
        client_id: process.env.POAP_CLIENT_ID,
        client_secret: process.env.POAP_CLIENT_SECRET,
      },
      {
        baseURL: process.env.POAP_AUTH_BASE_URL,
        headers: {
          'X-API-Key': undefined,
        },
      }
    )
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
  const secret = await axios
    .get<{ secret: string }>(`/api/poap/claim-qr`, {
      params: {
        qr_hash: mintLink.qr_hash,
        token,
      },
    })
    .then((res) => res.data.secret)
  return axios.post<{ secret: string }>('/api/poap/claim-qr', null, {
    params: {
      address: address,
      qr_hash: mintLink?.qr_hash,
      secret: secret,
      token,
    },
  })
}
export const poapService = {
  postOauthToken,
  postEventQRCodes,
  postActionsClaimQr,
  getActionsClaimQr,
  getActionsScan,
  mint,
}
