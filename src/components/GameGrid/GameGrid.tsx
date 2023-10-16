import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Box, Button, Flex, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'

import { GamesConfig, GamesQueryConfig } from '@/types'
import { PATH } from '@/config'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import useGames from '@/hooks/useGames'
import { GameCardSkeleton } from '@/components/GameCardSkeleton'
import { GameCard } from '@/components/GameCard'

export default function GameGrid() {
  const paramsObj: GamesConfig = useSearchParamsObj()
  const navigate = useNavigate()

  // gamesParamsObj sẽ là argument truyền vào getGames fn.
  // gamesParamsObj nhằm tạo ra một object đầy đủ các params cần thiết cho getGames fn.
  // Dùng omitBy kết hợp với callback để loại bỏ cách giá trị undefined
  // mục đích là để khi tạo gamesParams thì sẽ không có các giá trị undefined
  // cụ thể nếu không loại bỏ các giá trị undefined params URL sẽ có dạng ?page=3&sort=undefined&minPrice=undefined&maxPrice=undefined.
  // Nói thêm, khi truyền object vào getGames fn mà property có dạng [key]: undefined
  // thì property đó sẽ tự động được loại bỏ không gắn vào URL để gọi API
  const gamesParamsObj: GamesQueryConfig = omitBy(
    {
      genres: paramsObj.genres,
      parent_platforms: paramsObj.parent_platforms,
      ordering: !paramsObj.ordering ? undefined : paramsObj.ordering,
      search: paramsObj.search,
    },
    isUndefined
  )

  const { data: gamesResponse, isLoading, error, fetchNextPage, hasNextPage } = useGames(gamesParamsObj)

  if (error) return <Text>{error.message}</Text>

  console.log(hasNextPage)

  if (!isLoading && !hasNextPage && gamesResponse.pages.length === 1)
    return (
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h2" mt={{ base: 6, lg: 12 }}>
          Game not found
        </Heading>
        <Button size="lg" mt={{ base: 3, lg: 6 }} onClick={() => navigate(PATH.homePage)}>
          Clear all
        </Button>
      </Flex>
    )

  const fetchedGamesCount = gamesResponse?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (
    <InfiniteScroll
      style={{ overflow: 'visible' }}
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={Boolean(hasNextPage)}
      loader={
        <Box mt={4} textAlign="center">
          <Spinner size="lg" />
        </Box>
      }
    >
      <SimpleGrid columns={{ base: 1, lg: 2, xl: 3, '2xl': 4 }} spacing={7} mt={{ base: '1rem', lg: '2rem' }}>
        {isLoading
          ? Array.from(Array(12)).map((_, index) => <GameCardSkeleton key={index} />)
          : gamesResponse.pages.length > 0 &&
            gamesResponse.pages.map((page, index) => (
              <Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </Fragment>
            ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}
