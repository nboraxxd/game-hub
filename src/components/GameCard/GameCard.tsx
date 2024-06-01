import { useState } from 'react'
import { Link, generatePath } from 'react-router-dom'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Game } from '@/types'
import { PATH } from '@/config'
import { getCroppedImageUrl } from '@/utils'
import { PlatformIconList } from '@/components/PlatformIconList'
import { CriticScore } from '@/components/CriticScore'
import { Emoji } from '@/components/Emoji'
import defaultImage from '@/assets/images/game-bg-default.jpg'

interface Props {
  game: Game
}

export default function GameCard({ game }: Props) {
  const gameDetailPath = generatePath(PATH.gameDetail, { slug: game.slug })

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Card
      shadow="lg"
      _hover={{
        transform: 'scale(1.02)',
        transition: 'transform .2s ease-in',
      }}
    >
      <Link to={gameDetailPath}>
        <Image
          as={LazyLoadImage}
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            if (e.currentTarget.src !== defaultImage) {
              e.currentTarget.onerror = null
              e.currentTarget.src = defaultImage
            }
          }}
          borderTopRadius={6}
          scale={isImageLoaded ? 1 : 0.8}
          opacity={isImageLoaded ? 1 : 0}
          transition={'opacity .3s ease-in, transform .3s ease-in'}
        />
      </Link>
      <CardBody>
        <HStack justify={game.parent_platforms ? 'space-between' : 'flex-end'} mb={3} minH={6}>
          <PlatformIconList key={game.id} platforms={game.parent_platforms?.map(({ platform }) => platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Link to={gameDetailPath}>
          <Heading fontSize="2xl" mr="33px">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </Link>
      </CardBody>
    </Card>
  )
}
