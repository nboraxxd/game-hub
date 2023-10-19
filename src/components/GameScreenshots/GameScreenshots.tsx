import useGameDetail from '@/hooks/useGameDetail'
import useScreenshots from '@/hooks/useScreenshots'
import { Image, SimpleGrid, Skeleton } from '@chakra-ui/react'

type Props = {
  slug: string
}

export default function GameScreenshots({ slug }: Props) {
  const { data, isLoading, error } = useScreenshots(slug)
  const { data: gameData } = useGameDetail(slug)

  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3}>
      {isLoading
        ? Array.from(Array(4)).map((_, index) => <Skeleton key={index} h={60} />)
        : data?.results.map(({ id, image }) => (
            <Image
              key={id}
              src={image}
              alt={gameData?.name}
              h="full"
              objectFit="cover"
              borderRadius="md"
              boxShadow="lg"
              opacity="0.9"
              _hover={{
                transform: 'scale(1.02)',
                opacity: '1',
                transition: 'all .2s ease-in',
              }}
            />
          ))}
    </SimpleGrid>
  )
}
