import { HStack, Image } from '@chakra-ui/react'
import logo from '@/assets/images/logo.png'
import { ColorModeSwitch } from '@/components//ColorModeSwitch'

export default function NavBar() {
  return (
    <HStack py={{ base: '3', lg: '6' }} as="nav">
      <Image src={logo} alt="GameHub" boxSize={{ base: '50px', lg: '60px' }} mr="auto" />
      <ColorModeSwitch />
    </HStack>
  )
}
