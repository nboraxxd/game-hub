import { useState } from 'react'
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import { Genre } from '@/types/genres.type'
import { getCroppedImageUrl } from '@/config'
import useFetch from '@/hooks/useFetch'
import { genresService } from '@/services/genres.service'
import { icons } from '@/utils'

const INITIAL_END_GENRE_INDEX = 9

export default function GenreList() {
  const [endGenreIndex, setEndGenreIndex] = useState<undefined | typeof INITIAL_END_GENRE_INDEX>(
    INITIAL_END_GENRE_INDEX
  )
  const isAllGenres = endGenreIndex === undefined
  const IconButton = isAllGenres ? icons.up : icons.down

  const { data } = useFetch<Genre>(genresService.getGenres)

  function handleToggle() {
    setEndGenreIndex((endGenreIndex) =>
      endGenreIndex === INITIAL_END_GENRE_INDEX ? undefined : INITIAL_END_GENRE_INDEX
    )
  }

  return (
    <List display="flex" flexDir="column" gap="2">
      {data.slice(0, endGenreIndex).map((genre) => (
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
      <ListItem>
        <Button leftIcon={<IconButton />} variant="unstyled" onClick={handleToggle} display="flex" alignItems="center">
          {isAllGenres ? 'Hide' : 'Show all'}
        </Button>
      </ListItem>
    </List>
  )
}
