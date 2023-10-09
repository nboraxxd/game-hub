import { useEffect, useState } from 'react'
import { Game } from '@/types/games.type'
import { gamesService } from '@/services/games.service'
import { SERVICE_STATUS } from '@/config'
import { CanceledError } from 'axios'

type Status = 'idle' | 'pending' | 'successful' | 'rejected'

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')
  const [status, setStatus] = useState<Status>(SERVICE_STATUS.idle)

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        setStatus(SERVICE_STATUS.pending)

        const response = await gamesService.getGames(controller.signal)
        setGames(response.data.results)
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
  }, [])

  return {
    games,
    error,
    status,
  }
}
