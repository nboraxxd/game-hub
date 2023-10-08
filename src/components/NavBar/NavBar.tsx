import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '@/assets/images/logo.png'

export default function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  )
}
