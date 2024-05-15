import { SubnameResolutionResponse } from './types/ens'
import { axiosInstance } from './axiosInstance'

export const enum EnsRecordType {
  ACCOUNT_INFO = 'ACCOUNT_INFO',
  ACCOUNT_PROFILE_IMAGE_CID = 'ACCOUNT_PROFILE_IMAGE_CID',
  ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS',
}

export function createSubname(body: { label: string; address: string }) {
  return axiosInstance
    .post<boolean>('ns/createSubname', body)
    .then((res) => res.data)
}
export function createTextRecord(body: {
  label: string
  key: string
  text: string
}) {
  return axiosInstance
    .put<boolean>(`ns/createTextRecord`, body)
    .then((res) => res.data)
}
export function getIsNameAvailable(params: { label: string }) {
  return axiosInstance
    .get<{ isAvailable: boolean }>(`ns/isavailable`, {
      params,
    })
    .then((res) => res.data)
}
export function getSubnameResolution(params: { address: string }) {
  return axiosInstance
    .get<Array<SubnameResolutionResponse>>(`ns/getsubnameresolution`, {
      params,
    })
    .then((res) => res.data)
}

export function getSubnameMetadata(params: { label: string; key: string }) {
  return axiosInstance
    .get<{ record: string }>(`ns/getSubnameMetadata`, { params })
    .then((res) => res.data)
}

export function createCustomSubnameData(body: {
  label: string
  key: string
  data: string
}) {
  return axiosInstance
    .put<boolean>(`ns/createCustomSubnameData`, body)
    .then((res) => res.data)
}
export function getCustomSubnameData(params: { label: string; key: string }) {
  return axiosInstance
    .get<string>(`ns/getCustomSubnameData`, { params })
    .then((res) => res.data)
}

export const nsService = {
  getIsNameAvailable,
  getSubnameResolution,
  getSubnameMetadata,
  getCustomSubnameData,
  createSubname,
  createCustomSubnameData,
  createTextRecord,
}
