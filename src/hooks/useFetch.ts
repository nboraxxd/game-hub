import { useEffect, useState } from 'react'
import { AxiosResponse, CanceledError } from 'axios'
import { Status } from '@/types/status.type'
import { SERVICE_STATUS } from '@/config'

type Response<T> = {
  count: number
  results: T[]
}

export default function useFetch<T>(promise: (signal: AbortSignal) => Promise<AxiosResponse<Response<T>>>) {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string>('')
  const [status, setStatus] = useState<Status>(SERVICE_STATUS.idle)

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        setStatus(SERVICE_STATUS.pending)

        const response = await promise(controller.signal)

        setData(response.data.results)
        setStatus(SERVICE_STATUS.successful)
      } catch (err) {
        if (err instanceof CanceledError) {
          setStatus(SERVICE_STATUS.idle)
          return
        }

        setStatus(SERVICE_STATUS.rejected)
        console.log(err)
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Something went wrong')
        }
      }
    })()

    return () => controller.abort()
  }, [promise])

  return {
    data,
    error,
    status,
  }
}
