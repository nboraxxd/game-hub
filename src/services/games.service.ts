import { Game, GamesQueryConfig } from '@/types'
import { http } from '@/utils'
import { SuccessResponse } from '../types/utlis.type'

const GAMES_URL = '/games'

type GamesQueryConfigWithPage = GamesQueryConfig & {
  page: number
}

export const gamesService = {
  getGames(params?: GamesQueryConfigWithPage): Promise<SuccessResponse<Game>> {
    return http.get(GAMES_URL, { params })
  },
}
