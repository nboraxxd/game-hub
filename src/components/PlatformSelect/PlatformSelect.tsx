import { createSearchParams, useNavigate } from 'react-router-dom'
import { Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react'
import omit from 'lodash/omit'

import { icons } from '@/utils'
import useFetch from '@/hooks/useFetch'
import { plagformsService } from '@/services/platforms.service'
import { PATH, SERVICE_STATUS } from '@/config'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { GamesConfig } from '@/types'

export default function PlatformSelect() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()

  const { data: platforms, status } = useFetch(plagformsService.getPlatforms)
  const isLoadingPlatforms = status === SERVICE_STATUS.idle || status === SERVICE_STATUS.pending

  function onSlectPlatform(platformId?: number) {
    const parentPlatform = platformId
      ? { ...paramsObj, parent_platforms: platformId.toString() }
      : omit({ ...paramsObj }, ['parent_platforms'])
    const platformSearch = createSearchParams(parentPlatform).toString()
    console.log('🔥 ~ onSlectPlatform ~ platformSearch:', platformSearch)

    navigate({
      pathname: PATH.homePage,
      search: platformSearch,
    })
  }

  if (status === SERVICE_STATUS.rejected) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<icons.down />}>
        Platforms: {platforms.find((p) => p.id.toString() === paramsObj.parent_platforms)?.name || 'All'}
      </MenuButton>
      <MenuList>
        {isLoadingPlatforms ? (
          Array.from(Array(6)).map((_, index) => (
            <MenuItem key={index} as="div" h="36px" _hover={{ background: 'none' }}>
              <Skeleton h="full" w="full" />
            </MenuItem>
          ))
        ) : (
          <>
            <MenuItem onClick={() => onSlectPlatform()}>All</MenuItem>
            {platforms.map((platform) => (
              <MenuItem key={platform.id} onClick={() => onSlectPlatform(platform.id)}>
                {platform.name}
              </MenuItem>
            ))}
          </>
        )}
      </MenuList>
    </Menu>
  )
}