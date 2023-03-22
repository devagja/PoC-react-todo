import { memo, type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = memo(function _(): ReactElement {
  return (
    <div>
      <Outlet />
    </div>
  )
})

export default Layout
