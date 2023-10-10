import { SimpleGrid, Text } from '@chakra-ui/react'

import { Game } from '@/types/games.type'
import useFetch from '@/hooks/useFetch'
import { gamesService } from '@/services/games.service'
import { SERVICE_STATUS } from '@/config'
import { GameCardSkeleton } from '@/components/GameCardSkeleton'
import { GameCard } from '@/components/GameCard'

export default function GameGrid() {
  const { data, status, error } = useFetch<Game>(gamesService.getGames)
  const isLoadingGames = status === (SERVICE_STATUS.idle || SERVICE_STATUS.pending)

  return (
    <>
      {status === SERVICE_STATUS.rejected && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={7} padding={3}>
        {isLoadingGames
          ? Array.from(Array(12)).map((_, index) => <GameCardSkeleton key={index} />)
          : data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}
