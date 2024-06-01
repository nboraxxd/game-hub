import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link as LinkRouter, createSearchParams } from 'react-router-dom'
import { Button, Heading, Icon, Image, Link, List, ListItem, Skeleton, Text } from '@chakra-ui/react'

import { PATH } from '@/config'
import { GamesConfig } from '@/types'
import { icons, getCroppedImageUrl } from '@/utils'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import useGenres from '@/hooks/useGenres'

const LIMIT = 9

export default function GenreList() {
  const paramsObj: GamesConfig = useSearchParamsObj()
  const { data: genresResponse, isLoading, error } = useGenres()

  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [limit, setLimit] = useState<undefined | typeof LIMIT>(LIMIT)
  const isAllGenres = limit === undefined
  const IconToggle = isAllGenres ? icons.up : icons.down

  const genreSearchParams = paramsObj.search ? { search: paramsObj.search } : undefined

  function handleToggle() {
    setLimit((endGenreIndex) => (endGenreIndex === LIMIT ? undefined : LIMIT))
  }

  if (error) return null

  return (
    <>
      <Heading as="h2" fontSize="2xl">
        Genres
      </Heading>
      <List mt={4}>
        {isLoading ? (
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
                to={{ pathname: PATH.games, search: createSearchParams(genreSearchParams).toString() }}
                display="inline-flex"
                alignItems="center"
              >
                <Icon as={icons.all} boxSize={8} />
                <Text ml={3} textShadow={paramsObj.genres ? '' : '0.7px 0 0 currentColor'}>
                  All games
                </Text>
              </Link>
            </ListItem>
            {genresResponse.results.slice(0, limit).map((genre) => {
              const genreSearchParams = paramsObj.search
                ? { search: paramsObj.search, genres: genre.slug }
                : omitBy({ genres: genre.slug }, isUndefined)

              return (
                <ListItem key={genre.id} mt={3}>
                  <Link
                    as={LinkRouter}
                    to={{ pathname: PATH.games, search: createSearchParams(genreSearchParams).toString() }}
                    display="inline-flex"
                    alignItems="center"
                  >
                    <Image
                      as={LazyLoadImage}
                      src={getCroppedImageUrl(genre.image_background)}
                      alt={genre.name}
                      onLoad={() => setIsImageLoaded(true)}
                      boxSize="32px"
                      borderRadius="8"
                      objectFit="cover"
                      scale={isImageLoaded ? 1 : 0.8}
                      opacity={isImageLoaded ? 1 : 0}
                      transition={'opacity .3s ease-in, transform .3s ease-in'}
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
