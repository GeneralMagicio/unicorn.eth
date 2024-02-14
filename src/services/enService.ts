import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_OFFCHAIN_BASE_URL ||
    'https://offchain.namespace.tech',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OFFCHIAN_API_KEY}`,
  },
})

export function createSubname(body: {
  domain: string
  label: string
  address: string
}) {
  return axiosInstance
    .post<boolean>('/v1/subname/mint', body)
    .then((res) => res.data)
}

export function getIsNameAvailable(params: { label: string; domain: string }) {
  return axiosInstance
    .get<{ isAvailable: boolean }>(
      `/v1/subname/availability/${params.label}/${params.domain}`
    )
    .then((res) => res.data)
}
export function getSubnameResolution(params: { address: string }) {
  return axiosInstance
    .get<Array<{ label: string; domain: string; fullName: string }>>(
      `/v1/subname/resolution/${params.address}/60`
    )
    .then((res) => res.data)
}
export const nsService = {
  getIsNameAvailable,
}
