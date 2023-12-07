import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/page/homePage'
import { RedirectRoute } from '@/components/RedirectRoute'

const routes: RouteObject[] = [
  { path: '/', element: <HomePage />, errorElement: <RedirectRoute /> },
]

export const router = createBrowserRouter(routes)
