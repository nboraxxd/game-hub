import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { SuspenseLoading } from '@/components/SuspenseLoading'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    </>
  )
}
