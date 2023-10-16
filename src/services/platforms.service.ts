import { Platform, SuccessResponse } from '@/types'
import { http } from '@/utils'

const PLATFORMS_URL = '/platforms/lists/parents'

export const platformsService = {
  getPlatforms(): Promise<SuccessResponse<Platform>> {
    return http.get(PLATFORMS_URL)
  },
}
