import { Link } from 'react-router-dom'
import { HStack, Image, LinkBox } from '@chakra-ui/react'

import { PATH } from '@/config'
import { ColorModeSwitch } from '@/components/ColorModeSwitch'
import { SearchInput } from '@/components/SearchInput'
import logo from '@/assets/images/logo.png'

export default function NavBar() {
  return (
    <HStack py={{ base: '3', lg: '6' }} as="nav">
      <LinkBox as={Link} to={PATH.homePage} flexShrink="0" mr="auto">
        <Image src={logo} alt="GameHub" boxSize={{ base: '50px', lg: '60px' }} />
      </LinkBox>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}
