import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '@/hooks/useGames'
import { SERVICE_STATUS } from '@/config'
import { GameCard } from '@/components/GameCard'

export default function GameGrid() {
  const { status, error, games } = useGames()

  return (
    <>
      {status === SERVICE_STATUS.rejected && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={3}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}
