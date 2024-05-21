import { axiosInstance } from './axiosInstance'

export const uploadImage = async (file: File) => {
  const data = new FormData()
  data.append('data', file)
  data.append(
    'pinataMetadata',
    JSON.stringify({ name: 'unicorn.eth user profile' })
  )
  return axiosInstance.post('ns/upload-image', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}
export const pinataService = {
  uploadImage,
}
