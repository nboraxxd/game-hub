import { useRef } from 'react'
import { Box, Container, HStack, Heading, Show } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

import { GamesConfig } from '@/types'
import { SCROLL_TRIGGER_POSITION } from '@/config'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import useScrollTo from '@/hooks/useScrollTo'
import useGenres from '@/hooks/useGenres'
import usePlatforms from '@/hooks/usePlatforms'

import { SideNav } from '@/components/SideNav'
import { GenreSelector } from '@/components/GenreSelector'
import { SortSelector } from '@/components/SortSelector'
import { PlatformSelector } from '@/components/PlatformSelector'
import { ClearSortButton } from '@/components/ClearSortButton'
import { GameGrid } from '@/components/GameGrid'

export default function HomePage() {
  const paramsObj: GamesConfig = useSearchParamsObj()

  const { data: genresResponse } = useGenres()
  const genreHeading = genresResponse.results.find((genre) => genre.slug === paramsObj.genres)?.name

  const { data: platformsResponse } = usePlatforms()
  const platformHeading = platformsResponse.results.find(
    (platform) => platform.id.toString() === paramsObj.parent_platforms
  )?.name

  const topRef = useRef<HTMLHeadingElement>(null)

  useScrollTo(
    [paramsObj.genres || ''],
    window.scrollY >= SCROLL_TRIGGER_POSITION
      ? (topRef?.current?.getBoundingClientRect().top ?? 0) + window.scrollY
      : undefined
  )

  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }} pb={{ base: 6, lg: 10 }}>
      <Helmet>
        <title>Homepage | GameHub</title>
        <meta name="description" content="Home page of the Gamehub project in the React 18 course" />
      </Helmet>
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
          <Heading as="h1" ref={topRef} ml={{ base: 'none', sm: 1 }}>{`${platformHeading || ''} ${
            genreHeading || ''
          } Games`}</Heading>
          <HStack
            flexDirection={{ base: 'column', lg: 'row' }}
            spacing={3}
            ml={{ base: 'none', sm: 1 }}
            mt={{ base: 1.5, lg: 3 }}
          >
            <Show below="lg">
              <GenreSelector />
            </Show>
            <PlatformSelector />
            <SortSelector />
            <ClearSortButton />
          </HStack>
          <GameGrid />
        </Box>
      </HStack>
    </Container>
  )
}
