export interface Platform {
  id: number
  name: string
  slug: string
}

export interface PlatformsResponse {
  count: number
  results: Platform[]
}
