import { useState, useEffect } from 'react'
import { SERVICE_STATUS } from '@/config'
import { gamesService } from '@/services/games.service'
import { Game } from '@/types/games.type'
import { Text } from '@chakra-ui/react'

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')
  const [status, setStatus] = useState(SERVICE_STATUS.idle)

  useEffect(() => {
    ;(async () => {
      try {
        setStatus(SERVICE_STATUS.pending)

        const response = await gamesService.games()
        setGames(response.data.results)
        setStatus(SERVICE_STATUS.successful)
      } catch (err) {
        console.log(err)
        setStatus(SERVICE_STATUS.rejected)
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Something went wrong')
        }
      }
    })()
  }, [])

  return (
    <>
      {status === SERVICE_STATUS.rejected && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}
