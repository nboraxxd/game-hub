import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '@/types/games.type'
import icons from '@/utils/icons'

interface Props {
  platforms: Platform[]
}

export default function PlatformIconList({ platforms }: Props) {
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={icons[platform.slug]} color="gray.500">
          {platform.name}
        </Icon>
      ))}
    </HStack>
  )
}
