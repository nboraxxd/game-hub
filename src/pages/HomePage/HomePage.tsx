import { useContext } from 'react'
import { Box, Container, HStack, Heading, Skeleton } from '@chakra-ui/react'

import { GamesContext } from '@/contexts/games.context'
import { SideNav } from '@/components/SideNav'
import { PlatformSelect } from '@/components/PlatformSelect'
import { SortSelector } from '@/components/SortSelector'
import { GameGrid } from '@/components/GameGrid'

export default function HomePage() {
  const { genre, platform } = useContext(GamesContext)

  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }}>
      <HStack alignItems="start" justifyContent={{ base: 'center', lg: 'unset' }}>
        <SideNav />
        <Box
          as="main"
          flexGrow="1"
          display={{ base: 'flex', lg: 'block' }}
          flexDirection="column"
          justifyContent={{ base: 'center', lg: 'unset' }}
          maxWidth={{ base: 'unset', sm: '480px', lg: 'unset' }}
        >
          <Heading as="h1" ml={{ base: 'none', sm: 1 }}>
            {platform === undefined && genre === undefined ? (
              <Skeleton h="2.5rem" w="200px" />
            ) : (
              `${platform} ${genre} Games`
            )}
          </Heading>
          <HStack
            flexDirection={{ base: 'column', sm: 'row' }}
            spacing={3}
            ml={{ base: 'none', sm: 1 }}
            mt={{ base: 1.5, lg: 3 }}
          >
            <SortSelector />
            <PlatformSelect />
          </HStack>
          <GameGrid />
        </Box>
      </HStack>
    </Container>
  )
}
