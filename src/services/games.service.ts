import { Game, GamesQueryConfig } from '@/types'
import { SERVER_URL } from '@/config'
import { http } from '@/utils'
import { SuccessResponse } from '../types/utlis.type'

export const gamesService = {
  getGames(signal: AbortSignal, params?: GamesQueryConfig): Promise<SuccessResponse<Game>> {
    return http.get(`${SERVER_URL}/games`, { signal, params })
  },
}
