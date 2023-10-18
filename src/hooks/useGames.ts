import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'

import { Game, GamesQueryConfig, SuccessResponse } from '@/types'
import { gamesService } from '@/services/games.service'

export default function useGames(params?: GamesQueryConfig) {
  return useInfiniteQuery<SuccessResponse<Game>, Error>({
    queryKey: ['games', params],
    queryFn: ({ pageParam = 1, signal }) => gamesService.getGames({ ...params, page: pageParam }, signal),
    staleTime: ms('10s'),
    getNextPageParam: (lastPage, allPages) => (lastPage.next ? allPages.length + 1 : undefined),
  })
}
