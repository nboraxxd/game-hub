import { Genre, Platform, Publisher } from '@/types'

export type Game = {
  id: number
  name: string
  description_raw: string
  slug: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  genres: Genre[]
  publishers: Publisher[]
}

export type GamesConfig = {
  genres?: string
  parent_platforms?: string
  ordering?: string
  search?: string
}

export type GamesQueryConfig = {
  [key in keyof GamesConfig]: string
}
