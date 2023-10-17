import { createSearchParams, useNavigate } from 'react-router-dom'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react'
import omit from 'lodash/omit'

import { GamesConfig } from '@/types'
import { icons } from '@/utils'
import { PATH } from '@/config'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import usePlatforms from '@/hooks/usePlatforms'

export default function PlatformSelector() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()

  const { data: platformsResponse, isLoading, error } = usePlatforms()

  function onSlectPlatform(platformId?: number) {
    const parentPlatform = platformId
      ? { ...paramsObj, parent_platforms: platformId.toString() }
      : omit({ ...paramsObj }, ['parent_platforms'])
    const platformSearchParams = createSearchParams(parentPlatform).toString()

    navigate({
      pathname: PATH.homePage,
      search: platformSearchParams,
    })
  }

  if (error) return null

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<icons.down />}>
          Platform:{' '}
          {platformsResponse.results.find((p) => p.id.toString() === paramsObj.parent_platforms)?.name || 'All'}
        </MenuButton>
        <MenuList>
          {isLoading ? (
            Array.from(Array(6)).map((_, index) => (
              <MenuItem key={index} as="div" h="36px" _hover={{ background: 'none' }}>
                <Skeleton h="full" w="full" />
              </MenuItem>
            ))
          ) : (
            <>
              <MenuItem onClick={() => onSlectPlatform()}>All</MenuItem>
              {platformsResponse.results.map((platform) => (
                <MenuItem key={platform.id} onClick={() => onSlectPlatform(platform.id)}>
                  {platform.name}
                </MenuItem>
              ))}
            </>
          )}
        </MenuList>
      </Menu>
    </Box>
  )
}
