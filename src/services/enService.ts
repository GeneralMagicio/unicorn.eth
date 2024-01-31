import { axiosInstance } from './axiosInstance'

export function getIsNameAvailable(name: string) {
  return axiosInstance
    .get<boolean>('/ns/isAvailable', { params: { name } })
    .then((res) => res.data)
}

export function createSubname(body: {
  safe: string
  name: string
  chain: string
}) {
  return axiosInstance
    .post<boolean>('/ns/createSubname', body)
    .then((res) => res.data)
}

export function getSubname(body: { safe: string }) {
  return axiosInstance
    .get<boolean>('/ns/getSubname', { params: body })
    .then((res) => res.data)
}

export const nsService = {
  getIsNameAvailable,
}
