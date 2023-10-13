import { Box, Container, HStack } from '@chakra-ui/react'
import { SideNav } from '@/components/SideNav'
import { PlatformSelect } from '@/components/PlatformSelect'
import { SortSelector } from '@/components/SortSelector'
import { GameGrid } from '@/components/GameGrid'

export default function HomePage() {
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
          <HStack flexDirection={{ base: 'column', sm: 'row' }} spacing={3} ml={{ base: 'none', sm: 1 }}>
            <SortSelector />
            <PlatformSelect />
          </HStack>
          <GameGrid />
        </Box>
      </HStack>
    </Container>
  )
}
