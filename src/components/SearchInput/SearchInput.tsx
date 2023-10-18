import { FormEvent, useState, useRef } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Icon, Input, InputGroup, InputLeftElement, InputRightElement, Kbd, Show } from '@chakra-ui/react'
import { useHotkeys } from 'react-hotkeys-hook'
import { isMacOs } from 'react-device-detect'

import { GamesConfig } from '@/types'
import useDisUpdateEffect from '@/hooks/useDisUpdateEffect'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { icons } from '@/utils'
import { PATH } from '@/config'

export default function SearchInput() {
  const controlK = isMacOs ? 'Control+K' : 'Ctrl+K'

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

  useHotkeys('control+k', () => (isFocused ? inputRef.current?.blur() : inputRef.current?.focus()), {
    ignoreModifiers: true,
    preventDefault: true,
    enableOnFormTags: ['input'],
  })

  useHotkeys('esc', () => inputRef.current?.blur(), {
    enableOnFormTags: ['input'],
  })

  function handleSubmit(ev: FormEvent<HTMLInputElement>) {
    ev.preventDefault()
    if (searchValue.trim() === paramsObj.search) {
      return inputRef.current?.blur()
    }

    const search = searchValue.trim() ? { ...paramsObj, search: searchValue.trim() } : paramsObj
    const searchParams = createSearchParams(search).toString()

    navigate({
      pathname: PATH.games,
      search: searchParams,
    })

    inputRef.current?.blur()
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
          <Kbd>{isFocused ? 'Enter' : controlK}</Kbd>
        </InputRightElement>
      </Show>
    </InputGroup>
  )
}
