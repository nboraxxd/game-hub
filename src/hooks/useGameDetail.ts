import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import { Game } from '@/types'
import { gamesService } from '@/services/games.service'

export default function useGameDetail(slug: string) {
  return useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => gamesService.getGameDetail(slug),
    staleTime: ms('10s'),
    retry: 1,
  })
}
