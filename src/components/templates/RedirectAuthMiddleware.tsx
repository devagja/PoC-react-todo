import { memo, useEffect, type ReactElement } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import supabase from '~/supabase/client'

const RedirectAuthMiddleware = memo(function _(): ReactElement {
  const nav = useNavigate()

  useEffect(() => {
    void supabase.auth.getUser().then(res => {
      if (res?.error == null) {
        nav('/')
      }
    })
  }, [nav])

  return <Outlet />
})

export default RedirectAuthMiddleware
