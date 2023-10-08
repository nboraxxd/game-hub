import { HStack, Image } from '@chakra-ui/react'
import logo from '@/assets/images/logo.png'
import { ColorModeSwitch } from '@/components//ColorModeSwitch'

export default function NavBar() {
  return (
    <HStack p={2}>
      <Image src={logo} boxSize="60px" mr="auto" />
      <ColorModeSwitch />
    </HStack>
  )
}
