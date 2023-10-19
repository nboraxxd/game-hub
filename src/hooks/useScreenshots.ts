import { gamesService } from '@/services/games.service'
import { useQuery } from '@tanstack/react-query'

export default function useScreenshots(slug: string) {
  return useQuery({
    queryKey: ['screenshots', slug],
    queryFn: ({ signal }) => gamesService.getScreenShots(slug, signal),
  })
}
