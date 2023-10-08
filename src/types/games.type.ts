export type Game = {
  id: number
  name: string
}

export type GamesResponse = {
  count: number
  results: Game[]
}
