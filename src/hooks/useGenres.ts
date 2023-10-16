import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import { Genre, SuccessResponse } from '@/types'
import genresData from '@/data/genres.data'
import { genresService } from '@/services/genres.service'

export default function useGenres() {
  return useQuery<SuccessResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getGenres,
    staleTime: ms('1m'),
    initialData: genresData,
  })
}
