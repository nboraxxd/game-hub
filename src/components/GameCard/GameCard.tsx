import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '@/types/games.type'
import { PlatformIconList } from '@/components/PlatformIconList'
import { CriticScore } from '@/components/CriticScore'
import getCroppedImageUrl from '@/config/image-url'

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
        <Heading fontSize="2xl" noOfLines={2}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  )
}
