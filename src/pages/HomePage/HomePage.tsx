import { Box, HStack, Show } from '@chakra-ui/react'
import { GenreList } from '@/components/GenreList'
import { GameGrid } from '@/components/GameGrid'

export default function HomePage() {
  return (
    <HStack alignItems="start">
      <Show above="lg">
        <Box
          as="aside"
          w="200px"
          flexShrink="0"
          pos="sticky"
          top="0"
          height="100vh"
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              height: 'var(--chakra-sizes-1)',
              width: 'var(--chakra-sizes-1)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'var(--chakra-colors-gray-400)',
            },
          }}
        >
          <GenreList />
        </Box>
      </Show>
      <Box as="main" flexGrow="1">
        <GameGrid />
      </Box>
    </HStack>
  )
}
