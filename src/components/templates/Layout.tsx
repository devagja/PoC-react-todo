import { memo, type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import Toast from '~/components/atoms/Toast'
import Topbar from '~/components/organisms/Topbar'

const Layout = memo(function _(): ReactElement {
  return (
    <div>
      <Topbar />
      <div
        className='hero min-h-[calc(100vh-80px)] bg-base-200'
        style={{
          backgroundSize: '5px 5px',
          backgroundImage:
            'radial-gradient(hsla(var(--bc)/.2) 0.5px,hsla(var(--b2)/1) 0.5px)'
        }}
      >
        <Toast />
        <Outlet />
      </div>
    </div>
  )
})

export default Layout
