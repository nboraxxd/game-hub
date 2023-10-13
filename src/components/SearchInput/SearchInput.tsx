import { FormEvent, useState, useRef } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Icon, Input, InputGroup, InputLeftElement, InputRightElement, Kbd, Show } from '@chakra-ui/react'
import { useHotkeys } from 'react-hotkeys-hook'

import { GamesConfig } from '@/types'
import useDisUpdateEffect from '@/hooks/useDisUpdateEffect'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { icons } from '@/utils'
import { PATH } from '@/config'

export default function SearchInput() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()

  const inputRef = useRef<HTMLInputElement>(null)
  const [searchValue, setSearchValue] = useState<string>(paramsObj.search || '')
  const [isFocused, setIsFocused] = useState(false)
  useDisUpdateEffect(() => {
    if (!paramsObj.search) {
      setSearchValue('')
    } else {
      setSearchValue(paramsObj.search)
    }
  }, [paramsObj.search || ''])

  useHotkeys('ctrl+k', () => (isFocused ? inputRef.current?.blur() : inputRef.current?.focus()), {
    ignoreModifiers: true,
    preventDefault: true,
    enableOnFormTags: ['input'],
  })

  useHotkeys('esc', () => inputRef.current?.blur(), {
    enableOnFormTags: ['input'],
  })

  function handleSubmit(ev: FormEvent<HTMLInputElement>) {
    ev.preventDefault()

    const search = searchValue.trim() ? { ...paramsObj, search: searchValue.trim() } : paramsObj
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
        ref={inputRef}
        value={searchValue}
        onChange={(ev) => setSearchValue(ev.target.value)}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
        pr={{ base: 'none', lg: '5rem' }}
        _placeholderShown={{ textOverflow: 'ellipsis' }}
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
