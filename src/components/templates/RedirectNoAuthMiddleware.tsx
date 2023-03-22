import { memo, useEffect, type ReactElement } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import supabase from '~/supabase/client'

const RedirectNoAuthMiddleware = memo(function _(): ReactElement {
  const nav = useNavigate()

  useEffect(() => {
    void supabase.auth.getUser().then(res => {
      if (res?.error != null) {
        nav('/login')
      }
    })
  }, [nav])

  return <Outlet />
})

export default RedirectNoAuthMiddleware
