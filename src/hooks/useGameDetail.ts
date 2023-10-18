import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import { GameDetail } from '@/types'
import { gamesService } from '@/services/games.service'

export default function useGameDetail(slug: string) {
  return useQuery<GameDetail, Error>({
    queryKey: ['games', slug],
    queryFn: () => gamesService.getGameDetail(slug),
    staleTime: ms('10s'),
    retry: 1,
  })
}
