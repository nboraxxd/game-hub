import useScreenshots from '@/hooks/useScreenshots'
import { Image, SimpleGrid } from '@chakra-ui/react'

type Props = {
  name: string
  slug: string
}

export default function GameScreenshots({ name, slug }: Props) {
  const { data, isLoading, error } = useScreenshots(slug)

  if (isLoading) return null

  if (error) throw error

  console.log(data)

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3}>
      {data?.results.map(({ id, image }) => (
        <Image
          key={id}
          src={image}
          alt={name}
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
