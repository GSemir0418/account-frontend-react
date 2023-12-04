import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/page/homePage'
import { ErrorPage } from '@/components/ErrorPage'

const routes: RouteObject[] = [
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
]

export const router = createBrowserRouter(routes)
