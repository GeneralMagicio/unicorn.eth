import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || 'https://unicorn.cupofjoy.store/',
  headers: {
    'Content-type': 'application/json',
  },
})
