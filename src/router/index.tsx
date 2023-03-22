import loadable from '@loadable/component'
import { createBrowserRouter } from 'react-router-dom'

import loaderTaskList from '~/loaders/loaderTaskList'
import queryClient from '~/queryClient'

/* eslint-disable react-refresh/only-export-components */
const LoadableRedirect = loadable(
  async () => await import('~/components/templates/Redirect')
)

const LoadableErrorPage = loadable(
  async () => await import('~/pages/ErrorPage')
)

const LoadableLayout = loadable(
  async () => await import('~/components/templates/Layout')
)

const LoadableRedirectAuthMiddleware = loadable(
  async () => await import('~/components/templates/RedirectAuthMiddleware')
)

const LoadableRedirectNoAuthMiddleware = loadable(
  async () => await import('~/components/templates/RedirectNoAuthMiddleware')
)

const LoadableAccessPortalLayout = loadable(
  async () => await import('~/components/templates/AccessPortalLayout')
)

const LoadableHome = loadable(async () => await import('~/pages/Home'))

const LoadableLogin = loadable(async () => await import('~/pages/Login'))

const LoadableSignup = loadable(async () => await import('~/pages/Signup'))

const LoadableForgotPass = loadable(
  async () => await import('~/pages/ForgotPass')
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
        children: [
          {
            index: true,
            element: <LoadableHome />,
            errorElement: <LoadableErrorPage />,
            loader: loaderTaskList(queryClient)
          }
        ]
      },
      {
        element: <LoadableRedirectAuthMiddleware />,
        children: [
          {
            element: <LoadableAccessPortalLayout />,
            children: [
              {
                path: 'login',
                element: <LoadableLogin />
              },
              {
                path: 'signup',
                element: <LoadableSignup />
              },
              {
                path: 'forgot-password',
                element: <LoadableForgotPass />
              }
            ]
          }
        ]
      }
    ]
  }
])

export default router
