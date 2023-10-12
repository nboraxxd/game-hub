import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '@/types'
import { getCroppedImageUrl } from '@/config'
import { PlatformIconList } from '@/components/PlatformIconList'
import { CriticScore } from '@/components/CriticScore'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  return (
    <Card shadow="lg">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} borderTopRadius={6} />
      <CardBody>
        <HStack justify="space-between" mb={3}>
          <PlatformIconList key={game.id} platforms={game.parent_platforms.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
