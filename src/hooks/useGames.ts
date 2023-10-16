import { gamesService } from '@/services/games.service'
import { Game, GamesQueryConfig, SuccessResponse } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGames(params?: GamesQueryConfig) {
  return useInfiniteQuery<SuccessResponse<Game>, Error>({
    queryKey: ['games', params],
    queryFn: ({ pageParam = 1 }) => gamesService.getGames({ ...params, page: pageParam }),
    staleTime: 10 * 1000, // 10s
    getNextPageParam: (lastPage, allPages) => (lastPage.next ? allPages.length + 1 : undefined),
  })
}
