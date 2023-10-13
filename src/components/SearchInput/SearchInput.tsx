import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { icons } from '@/utils'

export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" ml="1px">
        <Icon as={icons.search} />
      </InputLeftElement>
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  )
}
