import { useEffect, useState } from 'react'
import { createSearchParams } from 'react-router-dom'
import { AxiosResponse, CanceledError } from 'axios'
import omit from 'lodash/omit'

import { Status } from '@/types'
import { SERVICE_STATUS } from '@/config'

type paramsConfig = {
  [k: string]: string
}

type Response<T> = {
  count: number
  results: T[]
}

export default function useFetch<T>(
  promise: (signal: AbortSignal, paramsConfig?: paramsConfig) => Promise<AxiosResponse<Response<T>>>,
  paramsConfig?: paramsConfig
) {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string>('')
  const [status, setStatus] = useState<Status>(SERVICE_STATUS.idle)

  // createSearchParams(paramsConfig).toString() sẽ tạo ra searchParams từ paramsConfig
  // Cụ thể nếu paramsConfig có dạng { page: 3, limit: 12, categories: '60aba4e' }
  // thì searchParams sẽ có dạng 'page=3&limit=12&categories=60aba4e'
  const deps = createSearchParams(omit(paramsConfig)).toString()

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        setStatus(SERVICE_STATUS.pending)

        const response = await promise(controller.signal, paramsConfig)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promise, deps])

  return {
    data,
    error,
    status,
  }
}
