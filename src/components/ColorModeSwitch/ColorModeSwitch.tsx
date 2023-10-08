import { HStack, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()

  const iconColor = colorMode === 'light' ? 'gray.800' : 'gray.200'
  const IconComponent = colorMode === 'light' ? MoonIcon : SunIcon

  return (
    <HStack>
      <IconComponent boxSize={6} color={iconColor} cursor="pointer" userSelect="none" onClick={toggleColorMode} />
    </HStack>
  )
}
