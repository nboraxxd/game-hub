import { SimpleGrid, Text } from '@chakra-ui/react'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'

import { Game, GamesConfig, GamesQueryConfig } from '@/types'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import useFetch from '@/hooks/useFetch'
import { gamesService } from '@/services/games.service'
import { SERVICE_STATUS } from '@/config'
import { GameCardSkeleton } from '@/components/GameCardSkeleton'
import { GameCard } from '@/components/GameCard'

export default function GameGrid() {
  const paramsObj: GamesConfig = useSearchParamsObj()

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
    },
    isUndefined
  )

  const { data, status, error } = useFetch<Game>(gamesService.getGames, gamesParamsObj)
  const isLoadingGames = status === SERVICE_STATUS.idle || status === SERVICE_STATUS.pending

  return (
    <>
      {status === SERVICE_STATUS.rejected && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, lg: 2, xl: 3, '2xl': 4 }} spacing={7} mt={{ base: '1rem', lg: '2rem' }}>
        {isLoadingGames
          ? Array.from(Array(12)).map((_, index) => <GameCardSkeleton key={index} />)
          : data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}
