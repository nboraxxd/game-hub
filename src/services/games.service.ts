import { Game, GamesQueryConfig, Screenshot, SuccessResponse, Trailer } from '@/types'
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
    return http.get<Game, Game>(`${GAMES_URL}/${slug}`)
  },

  getTrailers(slug: string, signal?: AbortSignal) {
    return http.get<SuccessResponse<Trailer>, SuccessResponse<Trailer>>(`${GAMES_URL}/${slug}/movies`, {
      signal,
    })
  },

  getScreenShots(slug: string, signal?: AbortSignal) {
    return http.get<SuccessResponse<Screenshot>, SuccessResponse<Screenshot>>(`${GAMES_URL}/${slug}/screenshots`, {
      signal,
    })
  },
}
