import { Genre, SuccessResponse } from '@/types'
import { http } from '@/utils'

const GENRES_URL = '/genres'

export const genresService = {
  getGenres(): Promise<SuccessResponse<Genre>> {
    return http.get(GENRES_URL)
  },
}
