import { Icon, Input, InputGroup, InputLeftElement, InputRightElement, Kbd, Show } from '@chakra-ui/react'
import { useHotkeys } from 'react-hotkeys-hook'

import { icons } from '@/utils'
import { useRef, useState } from 'react'

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useHotkeys('ctrl+k', () => inputRef.current?.focus(), { ignoreModifiers: true, preventDefault: true })
  useHotkeys('esc', () => inputRef.current?.blur(), {
    enableOnFormTags: ['input'],
  })

  return (
    <InputGroup mx={{ base: 2, lg: 4 }}>
      <InputLeftElement pointerEvents="none" ml="1px">
        <Icon as={icons.search} />
      </InputLeftElement>
      <Input
        ref={inputRef}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
        pr={{ base: 'none', lg: '5rem' }}
        textOverflow="ellipsis"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Show above="lg">
        <InputRightElement w="5rem" gap={1} pointerEvents="none">
          {isFocused ? <Kbd>Esc</Kbd> : <Kbd>Ctrl+K</Kbd>}
        </InputRightElement>
      </Show>
    </InputGroup>
  )
}
