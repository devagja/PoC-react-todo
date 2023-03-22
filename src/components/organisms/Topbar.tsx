import { atom, useAtom, useSetAtom } from 'jotai'
import { memo, useCallback, useEffect, useMemo, type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../atoms/Logo'
import LanguajeSelector from '../molecules/LanguajeSelector'
import ThemeSelector from '../molecules/ThemeSelector'
import GithubIcon from '~/icons/GithubIcon'
import LogoutIcon from '~/icons/LogoutIcon'
import { alertAtom, alertBackSoon } from '~/state'
import supabase from '~/supabase/client'

const isLoginAtom = atom(false)

const Topbar = memo(function _(): ReactElement {
  const nav = useNavigate()

  const [isLogin, setLogin] = useAtom(isLoginAtom)

  const setAlert = useSetAtom(alertAtom)

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      setLogin(data.session !== null)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setLogin(session !== null)
      }
    )

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      authListener.subscription
    }
  }, [])

  const logout = useCallback(() => {
    void supabase.auth.signOut().then(() => {
      nav('/login')
      setAlert(alertBackSoon())
    })
  }, [nav])

  const LogoutBtn = useMemo(
    () =>
      isLogin && (
        <span
          className='tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]'
          data-tip='Logout'
        >
          <div className='flex-none items-center'>
            <span
              aria-label='Logout'
              onClick={logout}
              className='btn-ghost btn gap-1 normal-case'
            >
              <LogoutIcon />
              <span className='hidden md:inline'>Logout</span>
            </span>
          </div>
        </span>
      ),
    [isLogin, logout]
  )
  return (
    <nav className='navbar sticky top-0 z-30 w-full bg-base-100'>
      <div className='flex flex-1 md:gap-1 lg:gap-2'>
        <Logo />
      </div>
      <div className='flex-0'>
        {LogoutBtn}
        <ThemeSelector />
        <LanguajeSelector />

        <span
          className='tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]'
          data-tip='GitHub'
        >
          <div className='flex-none items-center'>
            <a
              aria-label='Github'
              target='_blank'
              href='https://github.com/devagja'
              rel='noopener noreferrer'
              className='btn-ghost drawer-button btn-square btn normal-case'
            >
              <GithubIcon />
            </a>
          </div>
        </span>
      </div>
    </nav>
  )
})

export default Topbar
