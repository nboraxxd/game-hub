import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { icons } from '@/utils'

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<icons.down />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  )
}
