import { memo, type ReactElement } from 'react'

const CheckIcon = memo(function _(): ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='invisible h-3 w-3'
    >
      <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'></path>
    </svg>
  )
})

export default CheckIcon
