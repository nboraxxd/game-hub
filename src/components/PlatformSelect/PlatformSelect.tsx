import { Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react'
import { icons } from '@/utils'
import useFetch from '@/hooks/useFetch'
import { plagformsService } from '@/services/platforms.service'
import { SERVICE_STATUS } from '@/config'

export default function PlatformSelect() {
  const { data: platforms, status, error } = useFetch(plagformsService.getPlatforms)
  const isLoadingPlatforms = status === SERVICE_STATUS.idle || status === SERVICE_STATUS.pending

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<icons.down />}>
        Platforms
      </MenuButton>
      <MenuList maxHeight="15rem" overflowY="scroll">
        {isLoadingPlatforms
          ? Array.from(Array(6)).map((_, index) => (
              <MenuItem key={index} as="div" h="36px" _hover={{ background: 'none' }}>
                <Skeleton h="full" w="full" />
              </MenuItem>
            ))
          : platforms.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}
