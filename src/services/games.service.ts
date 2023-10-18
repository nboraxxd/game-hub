import { Game, GameDetail, GamesQueryConfig, SuccessResponse } from '@/types'
import { http } from '@/utils'

const GAMES_URL = '/games'

type GamesQueryConfigWithPage = GamesQueryConfig & {
  page: number
}

export const gamesService = {
  getGames(params?: GamesQueryConfigWithPage, signal?: AbortSignal) {
    return http.get<SuccessResponse<Game>, SuccessResponse<Game>>(GAMES_URL, { params, signal })
  },

  getGameDetail(slug: string) {
    return http.get<GameDetail, GameDetail>(`${GAMES_URL}/${slug}`)
  },
}
