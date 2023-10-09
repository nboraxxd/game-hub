import { useEffect, useState } from 'react'
import { Game } from '@/types/games.type'
import { gamesService } from '@/services/games.service'
import { SERVICE_STATUS } from '@/config'
import { CanceledError } from 'axios'

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')
  const [status, setStatus] = useState(SERVICE_STATUS.idle)

  useEffect(() => {
    const cotroller = new AbortController()

    ;(async () => {
      try {
        setStatus(SERVICE_STATUS.pending)

        const response = await gamesService.games(cotroller.signal)
        setGames(response.data.results)
        setStatus(SERVICE_STATUS.successful)
      } catch (err) {
        if (err instanceof CanceledError) return

        setStatus(SERVICE_STATUS.rejected)
        console.log(err)
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Something went wrong')
        }
      }
    })()

    return () => cotroller.abort()
  }, [])

  return {
    games,
    error,
    status,
  }
}
