import { Link } from 'react-router-dom'
import { HStack, Image, LinkBox } from '@chakra-ui/react'
import logo from '@/assets/images/logo.png'
import { ColorModeSwitch } from '@/components//ColorModeSwitch'
import { PATH } from '@/config'

export default function NavBar() {
  return (
    <HStack py={{ base: '3', lg: '6' }} as="nav">
      <LinkBox as={Link} to={PATH.homePage} mr="auto">
        <Image src={logo} alt="GameHub" boxSize={{ base: '50px', lg: '60px' }} />
      </LinkBox>
      <ColorModeSwitch />
    </HStack>
  )
}
