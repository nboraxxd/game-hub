import { useEffect } from 'react'

export default function useScrollTo(dependencyList: string[] = [], top?: number | null) {
  useEffect(() => {
    window.scroll({
      top: top || 0,
      behavior: 'smooth',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencyList, top])
}
