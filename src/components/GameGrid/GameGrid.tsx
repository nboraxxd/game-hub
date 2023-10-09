import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '@/hooks/useGames'
import { SERVICE_STATUS } from '@/config'
import { GameCard } from '@/components/GameCard'
import { GameCardSkeleton } from '@/components/GameCardSkeleton'

export default function GameGrid() {
  const { status, error, games } = useGames()
  const isLoadingGames = status === (SERVICE_STATUS.idle || SERVICE_STATUS.pending)

  return (
    <>
      {status === SERVICE_STATUS.rejected && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={3}>
        {isLoadingGames
          ? Array.from(Array(12)).map((_, index) => <GameCardSkeleton key={index} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}
