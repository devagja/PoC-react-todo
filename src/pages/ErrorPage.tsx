import { useSetAtom } from 'jotai'
import { useEffect, type ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { alertAtom, alertServiceErr } from '~/state'
import supabase from '~/supabase/client'

function ErrorPage(): ReactElement {
  const setAlert = useSetAtom(alertAtom)

  useEffect(() => {
    void supabase.auth.signOut()
    setAlert(alertServiceErr())
  }, [])

  return (
    <div className='hero-content text-center'>
      <div className='max-w-md'>
        <h1 className='text-5xl font-bold'>
          Looks like our services are currently offline
        </h1>
        <p className='py-6'>
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p>
        <Link to='/login' className='btn-primary btn'>
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
