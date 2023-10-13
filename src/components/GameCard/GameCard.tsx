import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '@/types'
import { getCroppedImageUrl } from '@/utils'
import { PlatformIconList } from '@/components/PlatformIconList'
import { CriticScore } from '@/components/CriticScore'
import defaultImage from '@/assets/images/game-bg-default.jpg'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  console.log(game.parent_platforms)
  return (
    <Card shadow="lg">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        borderTopRadius={6}
        onError={(e) => {
          if (e.currentTarget.src !== defaultImage) {
            e.currentTarget.onerror = null
            e.currentTarget.src = defaultImage
          }
        }}
      />
      <CardBody>
        <HStack justify={game.parent_platforms ? 'space-between' : 'flex-end'} mb={3} minH={6}>
          <PlatformIconList key={game.id} platforms={game.parent_platforms?.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
