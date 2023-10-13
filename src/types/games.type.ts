import { Genre } from '@/types'

export type Platform = {
  id: number
  name: string
}

export type Game = {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  genres: Genre[]
}

export type GamesConfig = {
  genres?: string
  parent_platforms?: string
}

export type GamesQueryConfig = {
  [key in keyof GamesConfig]: string
}

export type GamesResponse = {
  count: number
  results: Game[]
}
