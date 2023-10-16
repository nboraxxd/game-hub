import { Game, GamesQueryConfig } from '@/types'
import { http } from '@/utils'
import { SuccessResponse } from '../types/utlis.type'

const GAMES_URL = '/games'

export const gamesService = {
  getGames(params?: GamesQueryConfig): Promise<SuccessResponse<Game>> {
    return http.get(GAMES_URL, { params })
  },
}
