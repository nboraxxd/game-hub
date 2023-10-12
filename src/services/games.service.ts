import omit from 'lodash/omit'

import { GamesQueryConfig, GamesResponse } from '@/types'
import { SERVER_URL } from '@/config'
import { http } from '@/utils'

export const gamesService = {
  getGames(signal: AbortSignal, params?: GamesQueryConfig) {
    const filteredParams = omit(params, ['page_size'])

    return http.get<GamesResponse>(`${SERVER_URL}/games`, { signal, params: filteredParams })
  },
}
