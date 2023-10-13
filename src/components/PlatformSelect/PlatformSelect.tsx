import { createSearchParams, useNavigate } from 'react-router-dom'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import omit from 'lodash/omit'

import { icons } from '@/utils'
import dataPlatforms from '@/data/parentPlatforms.data'
import { PATH } from '@/config'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { GamesConfig } from '@/types'
import { useEffect, useContext } from 'react'
import { GamesContext } from '@/contexts/games.context'

export default function PlatformSelect() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()
  const { setPlatform } = useContext(GamesContext)

  useEffect(() => {
    setPlatform(dataPlatforms.find((platform) => platform.id.toString() === paramsObj.parent_platforms)?.name || '')
  }, [paramsObj.parent_platforms, setPlatform])

  function onSlectPlatform(platformId?: number) {
    const parentPlatform = platformId
      ? { ...paramsObj, parent_platforms: platformId.toString() }
      : omit({ ...paramsObj }, ['parent_platforms'])
    const platformSearch = createSearchParams(parentPlatform).toString()

    navigate({
      pathname: PATH.homePage,
      search: platformSearch,
    })
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<icons.down />}>
        Platforms: {dataPlatforms.find((p) => p.id.toString() === paramsObj.parent_platforms)?.name || 'All'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSlectPlatform()}>All</MenuItem>
        {dataPlatforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSlectPlatform(platform.id)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
