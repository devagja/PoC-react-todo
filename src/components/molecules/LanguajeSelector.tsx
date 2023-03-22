import { memo, type ReactElement } from 'react'

import ChevronDownIcon from '~/icons/ChevronDownIcon'
import LanguageIcon from '~/icons/LanguageIcon'

const LanguageList = [
  {
    label: 'English',
    img: {
      alt: 'English',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg'
    }
  },
  {
    label: 'Español',
    img: {
      alt: 'Español',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ea-1f1f8.svg'
    }
  },
  {
    label: 'Français',
    img: {
      alt: 'Français',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1eb-1f1f7.svg'
    }
  },
  {
    label: 'Português',
    img: {
      alt: 'Português',
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f5-1f1f9.svg'
    }
  }
]

const LanguajeSelector = memo(function _(): ReactElement {
  return (
    <div title='Change Language' className='dropdown-end dropdown'>
      <div tabIndex={0} className='btn-ghost btn gap-1 normal-case'>
        <LanguageIcon />
        <ChevronDownIcon />
      </div>
      <div className='dropdown-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto bg-base-200 text-base-content shadow-2xl'>
        <ul className='menu menu-compact gap-1 p-3' tabIndex={0}>
          <li>
            <button className='flex'>
              <span className='flex flex-1 justify-between'>
                Temporarily unavailable
              </span>
            </button>
          </li>
          {LanguageList.map(({ label, img }) => (
            <li key={label}>
              <button className='flex'>
                <img {...img} loading='lazy' width='20' height='20' />
                <span className='flex flex-1 justify-between'>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default LanguajeSelector
