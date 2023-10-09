import { http } from '@/utils/http'
import { SERVER_URL } from '@/config'
import { GamesResponse } from '@/types/games.type'

export const gamesService = {
  getGames(signal: AbortSignal) {
    return http.get<GamesResponse>(`${SERVER_URL}/games`, { signal })
  },
}
