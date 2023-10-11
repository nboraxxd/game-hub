import { Container } from '@chakra-ui/react'
import { NavBar } from '@/components/NavBar'

export default function Header() {
  return (
    <header>
      <Container maxW="120rem" px={{ base: '6', lg: '10' }}>
        <NavBar />
      </Container>
    </header>
  )
}
