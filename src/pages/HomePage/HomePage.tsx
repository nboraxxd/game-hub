import { Box, Container, HStack, Show } from '@chakra-ui/react'
import { SideNav } from '@/components/SideNav'
import { PlatformSelect } from '@/components/PlatformSelect'
import { SortSelector } from '@/components/SortSelector'
import { GameGrid } from '@/components/GameGrid'

export default function HomePage() {
  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }}>
      <HStack alignItems="start" justifyContent={{ base: 'center', lg: 'unset' }}>
        <Show above="lg">
          <SideNav />
        </Show>
        <Box
          as="main"
          flexGrow="1"
          display={{ base: 'flex', lg: 'block' }}
          flexDirection="column"
          justifyContent={{ base: 'center', lg: 'unset' }}
          maxWidth={{ base: '480px', lg: 'unset' }}
        >
          <HStack spacing={5} pl={1}>
            <SortSelector />
            <PlatformSelect />
          </HStack>
          <GameGrid />
        </Box>
      </HStack>
    </Container>
  )
}
