export interface Genre {
  id: number
  name: string
  slug: string
  image_background: string
}

export interface GenresResponse {
  count: number
  results: Genre[]
}
