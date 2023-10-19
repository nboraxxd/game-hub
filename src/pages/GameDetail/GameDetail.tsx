import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { Container, Heading } from '@chakra-ui/react'

import useGameDetail from '@/hooks/useGameDetail'
import { ExpandableText } from '@/components/ExpandableText'
import { GameAttributes } from '@/components/GameAttributes'
import { GameTrailer } from '@/components/GameTrailer'

export default function GameDetail() {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGameDetail(slug!)

  if (error) return <p>Không tìm thấy game</p>

  if (isLoading) return <p>Loading...</p>

  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }} pb={{ base: 6, lg: 10 }}>
      <Helmet>
        <title>{game.name} | GameHub</title>
        <meta name="description" content={game.description_raw} />
      </Helmet>

      <Heading as="h1">{game.name}</Heading>
      <ExpandableText children={game.description_raw} />

      <GameAttributes game={game} />
      <GameTrailer gameSlug={game.slug} />
    </Container>
  )
}
