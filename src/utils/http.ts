import axios, { type AxiosInstance } from 'axios'
import { SERVER_URL } from '@/config'

export const http: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  params: {
    key: '1ab19935c3c44d6da3fdbc8ae3469fb5',
  },
})
