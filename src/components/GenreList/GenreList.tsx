import { useState } from 'react'
import { Link as LinkRouter, createSearchParams } from 'react-router-dom'
import { Button, Heading, Icon, Image, Link, List, ListItem, Skeleton, Text } from '@chakra-ui/react'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'

import { GamesConfig, Genre } from '@/types'
import { PATH, SERVICE_STATUS } from '@/config'
import { genresService } from '@/services/genres.service'
import useFetch from '@/hooks/useFetch'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { icons, getCroppedImageUrl } from '@/utils'

const INITIAL_END_GENRE_INDEX = 9

export default function GenreList() {
  const paramsObj: GamesConfig = useSearchParamsObj()

  const [endGenreIndex, setEndGenreIndex] = useState<undefined | typeof INITIAL_END_GENRE_INDEX>(
    INITIAL_END_GENRE_INDEX
  )
  const isAllGenres = endGenreIndex === undefined
  const IconToggle = isAllGenres ? icons.up : icons.down

  const { data: genres, status } = useFetch<Genre>(genresService.getGenres)
  const isLoadingGenres = status === SERVICE_STATUS.idle || status === SERVICE_STATUS.pending

  function handleToggle() {
    setEndGenreIndex((endGenreIndex) =>
      endGenreIndex === INITIAL_END_GENRE_INDEX ? undefined : INITIAL_END_GENRE_INDEX
    )
  }

  const genreSearch = paramsObj.search ? { search: paramsObj.search } : undefined

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
            <ListItem mt={3}>
              <Link
                as={LinkRouter}
                to={{ pathname: PATH.homePage, search: createSearchParams(genreSearch).toString() }}
                display="inline-flex"
                alignItems="center"
              >
                <Icon as={icons.all} boxSize={8} />
                <Text ml={3} textShadow={paramsObj.genres ? '' : '0.7px 0 0 currentColor'}>
                  All games
                </Text>
              </Link>
            </ListItem>
            {genres.slice(0, endGenreIndex).map((genre) => {
              const genreSearch = paramsObj.search
                ? { search: paramsObj.search, genres: genre.slug }
                : omitBy({ genres: genre.slug }, isUndefined)

              return (
                <ListItem key={genre.id} mt={3}>
                  <Link
                    as={LinkRouter}
                    to={{ pathname: PATH.homePage, search: createSearchParams(genreSearch).toString() }}
                    display="inline-flex"
                    alignItems="center"
                  >
                    <Image
                      src={getCroppedImageUrl(genre.image_background)}
                      alt={genre.name}
                      boxSize="32px"
                      borderRadius="8"
                      objectFit="cover"
                    />
                    <Text ml={3} textShadow={paramsObj.genres === genre.slug ? '0.7px 0 0 currentColor' : ''}>
                      {genre.name}
                    </Text>
                  </Link>
                </ListItem>
              )
            })}
            <ListItem mt={1} mb={10}>
              <Button
                variant="unstyled"
                display="inline-flex"
                alignItems="center"
                opacity="0.7"
                _hover={{ opacity: '1' }}
                onClick={handleToggle}
              >
                <Icon as={IconToggle} boxSize={8} />
                <Text ml={3}>{isAllGenres ? 'Hide' : 'Show all'}</Text>
              </Button>
            </ListItem>
          </>
        )}
      </List>
    </>
  )
}
