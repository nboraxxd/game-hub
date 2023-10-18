import { GamesConfig } from '@/types'
import keys from 'lodash/keys'

export function hasOnlyGenreOrEmpty(paramsObj: GamesConfig) {
  const paramsObjKeys = keys(paramsObj) as Array<keyof GamesConfig>

  return paramsObjKeys[0] === 'genres' || paramsObjKeys.length === 0
}
