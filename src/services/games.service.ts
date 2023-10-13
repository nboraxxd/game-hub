import { GamesQueryConfig, GamesResponse } from '@/types'
import { SERVER_URL } from '@/config'
import { http } from '@/utils'

export const gamesService = {
  getGames(signal: AbortSignal, params?: GamesQueryConfig) {
    return http.get<GamesResponse>(`${SERVER_URL}/games`, { signal, params })
  },
}
