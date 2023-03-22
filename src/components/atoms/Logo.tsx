import { memo, type ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Logo = memo(function _(): ReactElement {
  return (
    <div className='flex flex-1 md:gap-1 lg:gap-2'>
      <Link
        to='/login'
        aria-current='page'
        aria-label='Homepage'
        className='flex-0 btn-ghost btn px-2 lg:hidden'
      >
        <div className='font-title inline-flex text-lg text-primary transition-all duration-200 md:text-3xl'>
          <span className='lowercase text-primary'>TO</span>
          <span className='uppercase text-base-content'>do</span>
        </div>
      </Link>

      <div className='hidden w-full max-w-sm lg:flex'>
        <div className='sticky top-0 z-20 hidden items-center gap-2  px-4 py-2 lg:flex'>
          <Link
            to='/login'
            aria-current='page'
            aria-label='Homepage'
            className='flex-0 btn-ghost btn px-2'
          >
            <div className='font-title inline-flex text-lg text-primary transition-all duration-200 md:text-3xl'>
              <span className='lowercase '>TO</span>
              <span className=' self-baseline  uppercase  text-base-content'>
                do
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
})

export default Logo
