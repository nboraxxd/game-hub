import { useEffect, useRef } from 'react'

export default function useDisUpdateEffect(fn: () => void, dependencies: string[] = []) {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current === true) {
      return fn()
    }

    didMountRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
