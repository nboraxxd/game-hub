import { Game, GamesQueryConfig } from '@/types'
import { http } from '@/utils'
import { SuccessResponse } from '../types/utlis.type'

const GAMES_URL = '/games'

type GamesQueryConfigWithPage = GamesQueryConfig & {
  page: number
}

export const gamesService = {
  getGames(params?: GamesQueryConfigWithPage, signal?: AbortSignal) {
    return http.get<SuccessResponse<Game>, SuccessResponse<Game>>(GAMES_URL, { params, signal })
  },
}
