import { axiosInstance } from './axiosInstance'

export function getIsNameAvailable(name: string) {
  return axiosInstance
    .get<boolean>('/ns/isAvailable', { params: { name } })
    .then((res) => res.data)
}

export const nsService = {
  getIsNameAvailable,
}
