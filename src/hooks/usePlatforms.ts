import { useQuery } from '@tanstack/react-query'
import ms from 'ms'

import { Platform, SuccessResponse } from '@/types'
import parentPlatforms from '@/data/parentPlatforms.data'
import { platformsService } from '@/services/platforms.service'

export default function usePlatforms() {
  return useQuery<SuccessResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformsService.getPlatforms,
    staleTime: ms('1m'),
    initialData: parentPlatforms,
  })
}
