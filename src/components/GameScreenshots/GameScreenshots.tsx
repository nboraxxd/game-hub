import { useState } from 'react'
import { Image, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import useGameDetail from '@/hooks/useGameDetail'
import useScreenshots from '@/hooks/useScreenshots'

type Props = {
  slug: string
}

export default function GameScreenshots({ slug }: Props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const { data, isLoading, error } = useScreenshots(slug)
  const { data: gameData } = useGameDetail(slug)

  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3}>
      {isLoading
        ? Array.from(Array(4)).map((_, index) => <Skeleton key={index} h={60} />)
        : data?.results.map(({ id, image }) => (
            <Image
              as={LazyLoadImage}
              key={id}
              src={image}
              alt={gameData?.name}
              onLoad={() => setIsImageLoaded(true)}
              h="full"
              objectFit="cover"
              borderRadius="md"
              boxShadow="lg"
              scale={isImageLoaded ? 1 : 0.8}
              opacity={isImageLoaded ? 0.9 : 0}
              transition={'opacity .3s ease-in, transform .3s ease-in'}
              _hover={{
                transform: isImageLoaded ? 'scale(1.02)' : 'scale(1)',
                opacity: isImageLoaded ? 1 : 0,
              }}
            />
          ))}
    </SimpleGrid>
  )
}
