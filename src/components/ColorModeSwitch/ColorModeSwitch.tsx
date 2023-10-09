import { IconButton, useColorMode } from '@chakra-ui/react'
import icons from '@/utils/icons'

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()

  const iconColor = colorMode === 'light' ? 'gray.700' : 'gray.300'
  const IconColorMode = colorMode === 'light' ? icons.dark : icons.light

  return (
    <IconButton
      aria-label="Color mode"
      variant="link"
      color={iconColor}
      fontSize="24px"
      icon={<IconColorMode />}
      onClick={toggleColorMode}
    />
  )
}
