import { Box, HStack, Show } from '@chakra-ui/react'
import { GameGrid } from '@/components/GameGrid'
import { Sidenav } from '@/components/Sidenav'

export default function HomePage() {
  return (
    <HStack alignItems="start">
      <Show above="lg">
        <Sidenav />
      </Show>
      <Box as="main" flexGrow="1">
        <GameGrid />
      </Box>
    </HStack>
  )
}
