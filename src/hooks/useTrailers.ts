import { gamesService } from '@/services/games.service'
import { SuccessResponse, Trailer } from '@/types'
import { useQuery } from '@tanstack/react-query'

export default function useTrailers(slug: string) {
  return useQuery<SuccessResponse<Trailer>, Error>({
    queryKey: ['trailers', slug],
    queryFn: ({ signal }) => gamesService.getTrailers(slug, signal),
  })
}
