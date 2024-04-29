import axios from 'axios'
import { SubnameResolutionResponse } from './types/ens'

export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_OFFCHAIN_BASE_URL ||
    'https://offchain.namespace.tech',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.OFFCHIAN_API_KEY}`,
  },
})

export const enum EnsRecordType {
  ACCOUNT_INFO = 'ACCOUNT_INFO',
  ACCOUNT_PROFILE_IMAGE_CID = 'ACCOUNT_PROFILE_IMAGE_CID',
}

const ENS_DOMAIN = process.env.NEXT_PUBLIC_OFFCHIAN_ENS_DOMAIN
const COIN_TYPE = 60 /* ETH */

export function createSubname(body: { label: string; address: string }) {
  return axiosInstance
    .post<boolean>('/v1/subname/mint', { ...body, domain: ENS_DOMAIN })
    .then((res) => res.data)
}
export function createTextRecord(body: {
  label: string
  key: string
  text: string
}) {
  const { label, key, text } = body
  return axiosInstance
    .put<boolean>(`/v1/subname/record/${label}/${ENS_DOMAIN}/${key}/${text}`)
    .then((res) => res.data)
}
export function getIsNameAvailable(params: { label: string }) {
  return axiosInstance
    .get<{ isAvailable: boolean }>(
      `/v1/subname/availability/${params.label}/${ENS_DOMAIN}`
    )
    .then((res) => res.data)
}
export function getSubnameResolution(params: { address: string }) {
  return axiosInstance
    .get<Array<SubnameResolutionResponse>>(
      `/v1/subname/resolution/${params.address}/${COIN_TYPE}`
    )
    .then((res) => res.data)
}

export function getSubnameMetadata(params: { label: string; key: string }) {
  const { label, key } = params
  return axiosInstance
    .get<{ record: string }>(`/v1/subname/record/${label}/${ENS_DOMAIN}/${key}`)
    .then((res) => res.data)
}

export function createCustomSubnameData(body: {
  label: string
  key: string
  data: string
}) {
  const { label, key, data } = body
  return axiosInstance
    .put<boolean>(`/v1/subname/data/${label}/${ENS_DOMAIN}/${key}`, { data })
    .then((res) => res.data)
}
export function getCustomSubnameData(params: { label: string; key: string }) {
  const { label, key } = params
  return axiosInstance
    .get<string>(`/v1/subname/data/${label}/${ENS_DOMAIN}/${key}`)
    .then((res) => res.data)
}

export const nsService = {
  getIsNameAvailable,
}
