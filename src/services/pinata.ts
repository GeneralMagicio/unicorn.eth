import axios from 'axios'
import { API_KEYS } from './api-keys'

export const uploadImage = async (file: File) => {
  const data = new FormData()
  data.append('file', file)
  data.append('pinataMetadata', JSON.stringify({ name: 'File to upload' }))
  return axios.post(process.env.NEXT_PUBLIC_PINATA_UPLOAD_URL!, data, {
    headers: {
      Authorization: `Bearer ${process.env.PINATA_JWT || API_KEYS.PINATA_JWT}`,
    },
  })
}
export const pinataService = {
  uploadImage,
}
