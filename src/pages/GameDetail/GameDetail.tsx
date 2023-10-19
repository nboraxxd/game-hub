import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, Container, GridItem, Heading, SimpleGrid, Skeleton, SkeletonText, Text } from '@chakra-ui/react'

import useGameDetail from '@/hooks/useGameDetail'
import { ExpandableText } from '@/components/ExpandableText'
import { GameAttributes } from '@/components/GameAttributes'
import { GameTrailer } from '@/components/GameTrailer'
import { GameScreenshots } from '@/components/GameScreenshots'
import { PATH } from '@/config'

export default function GameDetail() {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGameDetail(slug!)

  if (error)
    return (
      <Container maxW="120rem" px={{ base: '6', lg: '10' }} pb={{ base: 6, lg: 10 }} mt={3}>
        <Box pos="relative" px="4" color="white" textAlign="center" fontSize="3xl">
          <Heading as="h1" fontSize={{ base: '6rem', lg: '12rem' }} fontWeight="semibold" noOfLines={1}>
            404
          </Heading>
          <Text fontSize={{ base: '1.5rem', lg: '4rem' }}>We couldn't find this page.</Text>
          <Button
            as={Link}
            height="3.125rem"
            maxWidth="19rem"
            width="full"
            mt="8"
            backgroundColor="white"
            _hover={{ backgroundColor: 'gray.100' }}
            color="#333"
            fontSize="lg"
            fontWeight="semibold"
            to={PATH.homePage}
          >
            Main page
          </Button>
        </Box>
      </Container>
    )

  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }} pb={{ base: 6, lg: 10 }} mt={3}>
      <Helmet>
        <title>{game?.name ? `${game?.name} | GameHub` : 'GameHub'}</title>
        <meta name="description" content={game?.description_raw || 'Game description'} />
      </Helmet>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={2}>
        <GridItem>
          {isLoading ? (
            <>
              <Skeleton h={10} w="60%" />
              <SkeletonText w="full" mt={6} noOfLines={{ base: 6, sm: 4 }} spacing="2" skeletonHeight="5" />
              <SimpleGrid columns={2} mt={3} spacing={3}>
                {Array.from(Array(4)).map((_, index) => (
                  <Box key={index} mt={3}>
                    <Skeleton h={5} w="40%" />
                    <SkeletonText w="30%" mt={3} spacing="2" skeletonHeight="3" />
                  </Box>
                ))}
              </SimpleGrid>
            </>
          ) : (
            <>
              <Heading as="h1" mb={6}>
                {game.name}
              </Heading>
              <ExpandableText children={game.description_raw} />
              <GameAttributes game={game} />
            </>
          )}
        </GridItem>
        <GridItem>
          <Box mb={6}>
            <GameTrailer slug={slug!} />
          </Box>
          <GameScreenshots slug={slug!} />
        </GridItem>
      </SimpleGrid>
    </Container>
  )
}
