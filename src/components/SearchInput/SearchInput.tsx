import { createSearchParams, useNavigate } from 'react-router-dom'
import { Icon, Input, InputGroup, InputLeftElement, InputRightElement, Kbd, Show } from '@chakra-ui/react'
import { useHotkeys } from 'react-hotkeys-hook'

import { icons } from '@/utils'
import { FormEvent, useRef, useState } from 'react'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { PATH } from '@/config'
import { GamesConfig } from '@/types'

export default function SearchInput() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()

  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useHotkeys('ctrl+k', () => (isFocused ? inputRef.current?.blur() : inputRef.current?.focus()), {
    ignoreModifiers: true,
    preventDefault: true,
    enableOnFormTags: ['input'],
  })

  useHotkeys(
    'esc',
    () => {
      if (isFocused) {
        inputRef.current?.blur()
      }
    },
    {
      enableOnFormTags: ['input'],
    }
  )

  function handleSubmit(ev: FormEvent<HTMLDivElement>) {
    ev.preventDefault()

    const value = inputRef.current?.value.trim()
    const search = value ? { ...paramsObj, search: value } : paramsObj

    const searchParams = createSearchParams(search).toString()
    navigate({
      pathname: PATH.homePage,
      search: searchParams,
    })
  }

  return (
    <InputGroup as="form" mx={{ base: 2, lg: 4 }} onSubmit={handleSubmit}>
      <InputLeftElement pointerEvents="none" ml="1px">
        <Icon as={icons.search} />
      </InputLeftElement>
      <Input
        defaultValue={paramsObj.search}
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
          {isFocused ? <Kbd>Enter</Kbd> : <Kbd>Ctrl+K</Kbd>}
        </InputRightElement>
      </Show>
    </InputGroup>
  )
}
