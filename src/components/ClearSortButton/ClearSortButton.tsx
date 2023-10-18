import { createSearchParams, useNavigate } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import omit from 'lodash/omit'

import { GamesConfig } from '@/types'
import useSearchParamsObj from '@/hooks/useSearchParamsObj'
import { PATH } from '@/config'
import { icons, hasOnlyGenreOrEmpty } from '@/utils'

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
      aria-label="Clear sort"
      icon={<icons.clearSort />}
      title="Clear sort"
      flexShrink="0"
      ml={{ base: 'unset', lg: 'auto' }}
      isDisabled={hasOnlyGenreOrEmpty(paramsObj)}
      onClick={onClearSort}
    />
  )
}
