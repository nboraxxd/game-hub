import { PlatformsResponse } from '@/types/platforms.type'
import { SERVER_URL } from '@/config'
import { http } from '@/utils'

export const plagformsService = {
  getPlatforms(signal: AbortSignal) {
    return http.get<PlatformsResponse>(`${SERVER_URL}/platforms/lists/parents`, { signal })
  },
}
