import { GenresResponse } from '@/types'
import { SERVER_URL } from '@/config'
import { http } from '@/utils'

export const genresService = {
  getGenres(signal: AbortSignal) {
    return http.get<GenresResponse>(`${SERVER_URL}/genres`, { signal })
  },
}
