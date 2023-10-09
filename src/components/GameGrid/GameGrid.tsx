import { Text } from '@chakra-ui/react'
import useGames from '@/hooks/useGames'
import { SERVICE_STATUS } from '@/config'

export default function GameGrid() {
  const { status, error, games } = useGames()

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
