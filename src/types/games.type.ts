export type Game = {
  id: number
  name: string
  background_image: string
}

export type GamesResponse = {
  count: number
  results: Game[]
}
