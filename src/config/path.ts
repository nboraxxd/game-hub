const GAMES = '/games'

export const PATH = {
  homePage: '/',
  games: GAMES,
  gameDetail: GAMES + '/:slug',
} as const
