import { createSearchParams, useNavigate } from 'react-router-dom'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import omit from 'lodash/omit'

import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { icons } from '@/utils'
import { PATH } from '@/config'
import { GamesConfig } from '@/types'

const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
]

export default function SortSelector() {
  const paramsObj: GamesConfig = useSearchParamsObj()
  const navigate = useNavigate()

  function onSelectOrder(orderValue: string) {
    if (orderValue === '' && paramsObj.ordering === undefined) return
    if (orderValue !== '' && orderValue === paramsObj.ordering) return

    const ordering = orderValue === '' ? omit(paramsObj, ['ordering']) : { ...paramsObj, ordering: orderValue }

    const orderSearch = createSearchParams(ordering).toString()

    navigate({
      pathname: PATH.games,
      search: orderSearch,
    })
  }

  const currentSortOrder = sortOrders.find((order) => order.value === paramsObj.ordering)

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<icons.down />}>
          Order by: {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem key={order.value} value={order.value} onClick={() => onSelectOrder(order.value)}>
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}
