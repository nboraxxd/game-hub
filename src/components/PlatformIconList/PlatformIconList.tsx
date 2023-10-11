import { Icon, List, ListItem } from '@chakra-ui/react'
import { Platform } from '@/types/games.type'
import { icons } from '@/utils'

interface Props {
  platforms: Platform[]
}

export default function PlatformIconList({ platforms }: Props) {
  return (
    <List display="flex" alignItems="center" ml={-1.5}>
      {platforms.map((platform) => (
        <ListItem key={platform.id} ml={1.5}>
          <Icon as={icons[platform.slug]} fontSize="14px" color="gray.500">
            {platform.name}
          </Icon>
        </ListItem>
      ))}
    </List>
  )
}
