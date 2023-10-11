import { PATH } from '@/config'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFound } from '@/pages/NotFound'

export const routers = [
  {
    path: PATH.homePage,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: PATH.notFound,
        element: <NotFound />,
      },
    ],
  },
]
