import { GamesConfig } from '@/types'
import keys from 'lodash/keys'

export function hasOnlyGenreOrEmpty(paramsObj: GamesConfig) {
  const paramsObjKeys = keys(paramsObj) as Array<keyof GamesConfig>

  if (paramsObjKeys.length === 0) return true

  return paramsObjKeys.length === 1 && paramsObjKeys[0] === 'genres'
}
