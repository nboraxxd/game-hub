import { gamesService } from '@/services/games.service'
import { Game, GamesQueryConfig, SuccessResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

export default function useGames(params?: GamesQueryConfig) {
  return useQuery<SuccessResponse<Game>, Error>({
    queryKey: ['games', params],
    queryFn: () => gamesService.getGames(params),
    staleTime: 10 * 1000, // 10s
  })
}
