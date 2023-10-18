import { useEffect } from 'react'
import { ScrollTopButton } from '@/components/ScrollTopButton'
import { RouterProvider } from 'react-router-dom'
import { routers } from '@/router'

export default function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <RouterProvider router={routers} />
      <ScrollTopButton />
    </>
  )
}
