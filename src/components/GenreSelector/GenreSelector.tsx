import { createSearchParams, useNavigate } from 'react-router-dom'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'

import { GamesConfig } from '@/types'
import { icons } from '@/utils'
import { PATH } from '@/config'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import useGenres from '@/hooks/useGenres'

export default function GenreSelector() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()

  const { data: genresResponse, isLoading, error } = useGenres()

  function onSlectGenre(genreSlug?: string) {
    const genre: GamesConfig = genreSlug
      ? { search: paramsObj.search, genres: genreSlug }
      : { search: paramsObj.search }
    const genreSearchParams = createSearchParams(omitBy(genre, isUndefined)).toString()

    navigate({
      pathname: PATH.homePage,
      search: genreSearchParams,
    })
  }

  if (error) return null

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<icons.down />}>
          Genre: {genresResponse.results.find((g) => g.slug === paramsObj.genres)?.name || 'All'}
        </MenuButton>
        <MenuList zIndex="dropdown" maxHeight="50vh" overflowY="scroll">
          {isLoading ? (
            Array.from(Array(12)).map((_, index) => (
              <MenuItem key={index} as="div" h="36px" _hover={{ background: 'none' }}>
                <Skeleton h="full" w="full" />
              </MenuItem>
            ))
          ) : (
            <>
              <MenuItem onClick={() => onSlectGenre()}>All</MenuItem>
              {genresResponse.results.map((genre) => (
                <MenuItem key={genre.id} onClick={() => onSlectGenre(genre.slug)}>
                  {genre.name}
                </MenuItem>
              ))}
            </>
          )}
        </MenuList>
      </Menu>
    </Box>
  )
}
