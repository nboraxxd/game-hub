import { useQuery } from '@tanstack/react-query'

import { Platform, SuccessResponse } from '@/types'
import parentPlatforms from '@/data/parentPlatforms.data'
import { platformsService } from '@/services/platforms.service'

export default function usePlatforms() {
  return useQuery<SuccessResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformsService.getPlatforms,
    staleTime: 60 * 1000, // 1m
    initialData: { count: parentPlatforms.length, next: null, results: parentPlatforms },
  })
}
