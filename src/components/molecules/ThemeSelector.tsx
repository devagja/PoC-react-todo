import { atom, useAtom } from 'jotai'
import { memo, useCallback, type ReactElement } from 'react'

import CheckIcon from '~/icons/CheckIcon'
import ChevronDownIcon from '~/icons/ChevronDownIcon'
import PantoneIcon from '~/icons/PantoneIcon'

const themeList = [
  {
    theme: 'winter'
  },
  {
    theme: 'corporate'
  },
  {
    theme: 'retro'
  },
  {
    theme: 'cyberpunk'
  },
  {
    theme: 'dracula'
  },
  {
    theme: 'business'
  }
]

const themeSelectedAtom = atom('winter')

const ThemeSelector = memo(function _(): ReactElement {
  const [themeSelected, setTheme] = useAtom(themeSelectedAtom)
  const handleChangeTheme = useCallback(
    (theme: string) => () => {
      document.documentElement.setAttribute('data-theme', theme)
      setTheme(theme)
    },
    [setTheme]
  )

  return (
    <div title='Change Theme' className='dropdown-end dropdown'>
      <div tabIndex={0} className='btn-ghost btn gap-1 normal-case'>
        <PantoneIcon />
        <span className='hidden md:inline'>Theme</span>
        <ChevronDownIcon />
      </div>
      <div className='dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl'>
        <div className='grid grid-cols-1 gap-3 p-3' tabIndex={0}>
          {themeList.map(({ theme }) => (
            <button
              key={theme}
              className={`overflow-hidden rounded-lg text-left outline-base-content ${
                themeSelected === theme ? '[&_svg]:visible' : ''
              }`}
              data-set-theme={theme}
              data-act-className='[&amp;_svg]:visible'
              onClick={handleChangeTheme(theme)}
            >
              <div
                data-theme={theme}
                className='w-full cursor-pointer bg-base-100 font-sans text-base-content'
              >
                <div className='grid grid-cols-5 grid-rows-3'>
                  <div className='col-span-5 row-span-3 row-start-1 flex items-center gap-2 py-3 px-4'>
                    <CheckIcon />
                    <div className='flex-grow text-sm font-bold'>{theme}</div>
                    <div className='flex h-full flex-shrink-0 flex-wrap gap-1'>
                      <div className='w-2 rounded bg-primary'></div>
                      <div className='w-2 rounded bg-secondary'></div>
                      <div className='w-2 rounded bg-accent'></div>
                      <div className='w-2 rounded bg-neutral'></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
})

export default ThemeSelector
