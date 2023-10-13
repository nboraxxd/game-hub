import { useState } from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import { Heading, IconButton, Image, List, ListItem, Skeleton, Text, useColorModeValue } from '@chakra-ui/react'

import { GamesConfig, Genre } from '@/types'
import { PATH, SERVICE_STATUS, getCroppedImageUrl } from '@/config'
import { genresService } from '@/services/genres.service'
import useFetch from '@/hooks/useFetch'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { icons } from '@/utils'
import { SideNavButton } from '@/components/SideNavButton'

const INITIAL_END_GENRE_INDEX = 9

export default function GenreList() {
  const { genres: selectedGenre }: GamesConfig = useSearchParamsObj()

  const [endGenreIndex, setEndGenreIndex] = useState<undefined | typeof INITIAL_END_GENRE_INDEX>(
    INITIAL_END_GENRE_INDEX
  )
  const isAllGenres = endGenreIndex === undefined
  const IconToggle = isAllGenres ? icons.up : icons.down
  const buttonColor = useColorModeValue('gray.600', 'gray.400')
  const buttonColorHover = useColorModeValue('gray.800', 'gray.200')

  const { data: genres, status } = useFetch<Genre>(genresService.getGenres)
  const isLoadingGenres = status === SERVICE_STATUS.idle || status === SERVICE_STATUS.pending

  function handleToggle() {
    setEndGenreIndex((endGenreIndex) =>
      endGenreIndex === INITIAL_END_GENRE_INDEX ? undefined : INITIAL_END_GENRE_INDEX
    )
  }

  if (status === SERVICE_STATUS.rejected) return null

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
            <ListItem as={Link} to={PATH.homePage} display="flex" alignItems="center" mt={3}>
              <IconButton
                aria-label="All games"
                icon={<icons.all size="32px" />}
                variant="outline"
                size="sm"
                border="none"
                _hover={{ background: 'none' }}
              />
              <Text
                ml={3}
                textShadow={selectedGenre ? '' : '0.7px 0 0 currentColor'}
                _hover={{ textShadow: '0.7px 0 0 currentColor' }}
              >
                All games
              </Text>
            </ListItem>
            {genres.slice(0, endGenreIndex).map((genre) => {
              const genreSearch = createSearchParams({ genres: genre.slug }).toString()
              return (
                <ListItem
                  as={Link}
                  to={{ pathname: PATH.homePage, search: genreSearch }}
                  key={genre.id}
                  display="flex"
                  alignItems="center"
                  mt={3}
                >
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                    boxSize="32px"
                    borderRadius="8"
                    objectFit="cover"
                  />
                  <Text
                    ml={3}
                    textShadow={selectedGenre === genre.slug ? '0.7px 0 0 currentColor' : ''}
                    _hover={{ textShadow: '0.7px 0 0 currentColor' }}
                  >
                    {genre.name}
                  </Text>
                </ListItem>
              )
            })}
            <ListItem mt={3} mb={10}>
              <SideNavButton
                IconButton={IconToggle}
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
