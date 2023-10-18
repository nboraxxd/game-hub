/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { PATH } from '@/config'
import { MainLayout } from '@/layouts/MainLayout'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const GameDetail = lazy(() => import('@/pages/GameDetail/GameDetail'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

export const routers = createBrowserRouter([
  {
    path: PATH.homePage,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.games,
        element: <HomePage />,
      },
      {
        path: PATH.gameDetail,
        element: <GameDetail />,
      },
    ],
    errorElement: <NotFound />,
  },
])
