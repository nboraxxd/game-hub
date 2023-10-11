import { HStack, Image } from '@chakra-ui/react'
import logo from '@/assets/images/logo.png'
import { ColorModeSwitch } from '@/components//ColorModeSwitch'

export default function NavBar() {
  return (
    <HStack p={2}>
      <Image src={logo} alt="GameHub" boxSize={{ base: '40px', md: '60px' }} mr="auto" />
      <ColorModeSwitch />
    </HStack>
  )
}
