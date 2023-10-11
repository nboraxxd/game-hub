import { useState } from 'react'
import { Heading, Image, List, ListItem, Skeleton, Text, useColorModeValue } from '@chakra-ui/react'
import { Genre } from '@/types/genres.type'
import { SERVICE_STATUS, getCroppedImageUrl } from '@/config'
import { genresService } from '@/services/genres.service'
import useFetch from '@/hooks/useFetch'
import { icons } from '@/utils'
import { SideNavButton } from '@/components/SideNavButton'

const INITIAL_END_GENRE_INDEX = 9

export default function GenreList() {
  const [endGenreIndex, setEndGenreIndex] = useState<undefined | typeof INITIAL_END_GENRE_INDEX>(
    INITIAL_END_GENRE_INDEX
  )
  const isAllGenres = endGenreIndex === undefined
  const IconButton = isAllGenres ? icons.up : icons.down
  const buttonColor = useColorModeValue('gray.600', 'gray.400')
  const buttonColorHover = useColorModeValue('gray.800', 'gray.200')

  const { data: genres, status, error } = useFetch<Genre>(genresService.getGenres)
  const isLoadingGenres = status === (SERVICE_STATUS.idle || SERVICE_STATUS.pending)

  function handleToggle() {
    setEndGenreIndex((endGenreIndex) =>
      endGenreIndex === INITIAL_END_GENRE_INDEX ? undefined : INITIAL_END_GENRE_INDEX
    )
  }

  if (error) return null

  return (
    <>
      <Heading as="h2" fontSize="2xl">
        Genres
      </Heading>
      <List mt={4}>
        {isLoadingGenres ? (
          Array.from(Array(10)).map((_, index) => (
            <ListItem key={index} mt={3}>
              <Skeleton h="32px" maxW="full" />
            </ListItem>
          ))
        ) : (
          <>
            {genres.slice(0, endGenreIndex).map((genre) => (
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
              <SideNavButton
                IconButton={IconButton}
                buttonColor={buttonColor}
                buttonColorHover={buttonColorHover}
                isAll={isAllGenres}
                handleToggle={handleToggle}
              />
            </ListItem>
          </>
        )}
      </List>
    </>
  )
}
