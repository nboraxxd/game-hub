import { createSearchParams, useNavigate } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'

import { GamesConfig } from '@/types'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { icons } from '@/utils'
import { omit } from 'lodash'
import { PATH } from '@/config'

export default function ClearSortButton() {
  const navigate = useNavigate()
  const paramsObj: GamesConfig = useSearchParamsObj()

  function onClearSort() {
    const queryParams = createSearchParams(
      omit({ ...paramsObj }, ['parent_platforms', 'ordering', 'search'])
    ).toString()

    navigate({
      pathname: PATH.homePage,
      search: queryParams,
    })
  }

  return (
    <IconButton
      ml={{ base: 'unset', sm: 'auto' }}
      aria-label="Clear"
      icon={<icons.clearSort />}
      title="Clear sort"
      onClick={onClearSort}
    />
  )
}
