import { useState } from 'react'
import { Button, Heading, Image, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
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
    <>
      <Heading as="h2" fontSize="2xl">
        Genres
      </Heading>
      <List mt={4}>
        {data.slice(0, endGenreIndex).map((genre) => (
          <ListItem key={genre.id} display="flex" alignItems="center" mt={3}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius="8"
              objectFit="cover"
            />
            <Text ml={3}>{genre.name}</Text>
          </ListItem>
        ))}
        <ListItem mt={3} mb={10}>
          <Button
            leftIcon={<IconButton size="1.5rem" />}
            variant="unstyled"
            onClick={handleToggle}
            display="flex"
            alignItems="center"
            justifyContent="start"
            w="full"
            h={8}
            color={useColorModeValue('gray.600', 'gray.400')}
            _hover={{ color: useColorModeValue('gray.800', 'gray.200') }}
            sx={{
              '& .chakra-button__icon': {
                marginRight: '12px',
              },
            }}
          >
            {isAllGenres ? 'Hide' : 'Show all'}
          </Button>
        </ListItem>
      </List>
    </>
  )
}
