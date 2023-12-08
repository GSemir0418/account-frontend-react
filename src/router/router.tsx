import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/page/homePage'
import { RedirectRoute } from '@/components/RedirectRoute'
import { Welcome1 } from '@/page/welcomePage/Welcome1'
import { Welcome2 } from '@/page/welcomePage/Welcome2'
import { Welcome3 } from '@/page/welcomePage/Welcome3'
import { Welcome4 } from '@/page/welcomePage/Welcome4'
import { MainLayout } from '@/layouts/MainLayout'
import { WelcomeLayout } from '@/layouts/WelcomeLayout'
import { LoginPage } from '@/page/loginPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RedirectRoute />,
    children: [
      {
        path: 'welcome',
        element: <WelcomeLayout />,
        children: [
          { path: '1', element: <Welcome1 /> },
          { path: '2', element: <Welcome2 /> },
          { path: '3', element: <Welcome3 /> },
          { path: '4', element: <Welcome4 /> },
        ],
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
