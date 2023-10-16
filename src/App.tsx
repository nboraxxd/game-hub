import { useRoutes } from 'react-router-dom'
import { routers } from '@/router'
import { useEffect } from 'react'

export default function App() {
  const element = useRoutes(routers)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return <>{element}</>
}
