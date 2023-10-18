import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { Container, Heading } from '@chakra-ui/react'

import useGameDetail from '@/hooks/useGameDetail'
import { ExpandableText } from '@/components/ExpandableText'

export default function GameDetail() {
  const { slug } = useParams()
  const { data: gameDetail, isLoading, error } = useGameDetail(slug!)
  console.log(gameDetail?.description.length)

  if (error) return <p>Không tìm thấy game</p>

  if (isLoading) return <p>Loading...</p>

  return (
    <Container maxW="120rem" px={{ base: '6', lg: '10' }} pb={{ base: 6, lg: 10 }}>
      <Helmet>
        <title>{gameDetail.name} | GameHub</title>
        <meta name="description" content={gameDetail.description_raw} />
      </Helmet>
      <Heading as="h1">{gameDetail.name}</Heading>
      <ExpandableText children={gameDetail.description_raw} />
    </Container>
  )
}
