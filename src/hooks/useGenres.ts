import { useQuery } from '@tanstack/react-query'
import { Genre, SuccessResponse } from '@/types'
import { genresService } from '@/services/genres.service'
import genresData from '@/data/genres.data'

export default function useGenres() {
  return useQuery<SuccessResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getGenres,
    staleTime: 10 * 1000, // 10s
    initialData: { count: genresData.length, results: genresData },
  })
}
