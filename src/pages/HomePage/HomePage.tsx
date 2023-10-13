import { Box, Container, HStack, Heading } from '@chakra-ui/react'

import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { GamesConfig } from '@/types'
import dataGenres from '@/data/genres.data'
import dataPlatforms from '@/data/parentPlatforms.data'
import { SideNav } from '@/components/SideNav'
import { PlatformSelect } from '@/components/PlatformSelect'
import { SortSelector } from '@/components/SortSelector'
import { GameGrid } from '@/components/GameGrid'
import { ClearSortButton } from '@/components/ClearSortButton'

export default function HomePage() {
  const paramsObj: GamesConfig = useSearchParamsObj()
  const genreHeading = dataGenres.find((genre) => genre.slug === paramsObj.genres)?.name
  const platformHeading = dataPlatforms.find((platform) => platform.id.toString() === paramsObj.parent_platforms)?.name

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
            {`${platformHeading || ''} ${genreHeading || ''} Games`}
          </Heading>
          <HStack
            flexDirection={{ base: 'column', sm: 'row' }}
            spacing={3}
            ml={{ base: 'none', sm: 1 }}
            mt={{ base: 1.5, lg: 3 }}
          >
            <SortSelector />
            <PlatformSelect />
            <ClearSortButton />
          </HStack>
          <GameGrid />
        </Box>
      </HStack>
    </Container>
  )
}
