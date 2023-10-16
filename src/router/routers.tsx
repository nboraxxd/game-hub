/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { PATH } from '@/config'
import { MainLayout } from '@/layouts/MainLayout'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

export const routers = [
  { path: PATH.homePage, element: <MainLayout />, children: [{ index: true, element: <HomePage /> }] },
  { path: PATH.notFound, element: <NotFound /> },
]
