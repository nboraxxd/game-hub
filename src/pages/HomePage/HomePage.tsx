import { Box, Container, HStack, Show } from '@chakra-ui/react'
import { GameGrid } from '@/components/GameGrid'
import { Sidenav } from '@/components/Sidenav'

export default function HomePage() {
  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }}>
      <HStack alignItems="start">
        <Show above="lg">
          <Sidenav />
        </Show>
        <Box as="main" flexGrow="1">
          <GameGrid />
        </Box>
      </HStack>
    </Container>
  )
}
