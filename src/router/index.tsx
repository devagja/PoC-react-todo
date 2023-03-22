import loadable from '@loadable/component'
import { createBrowserRouter } from 'react-router-dom'

/* eslint-disable react-refresh/only-export-components */
const LoadableRedirect = loadable(
  async () => await import('~/components/templates/Redirect')
)
const LoadableLayout = loadable(
  async () => await import('~/components/templates/Layout')
)

const LoadableRedirectNoAuthMiddleware = loadable(
  async () => await import('~/components/templates/RedirectNoAuthMiddleware')
)

/* eslint-enable react-refresh/only-export-components */

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoadableLayout />,
    errorElement: <LoadableRedirect />,
    children: [
      {
        element: <LoadableRedirectNoAuthMiddleware />,
        children: []
      }
    ]
  }
])

export default router
