import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import { Genre } from '@/types/genres.type'
import useFetch from '@/hooks/useFetch'
import { genresService } from '@/services/genres.service'
import getCroppedImageUrl from '@/config/image-url'

export default function GenreList() {
  const { data } = useFetch<Genre>(genresService.getGenres)

  return (
    <List display="flex" flexDir="column" gap="2">
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius="8"
              objectFit="cover"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
