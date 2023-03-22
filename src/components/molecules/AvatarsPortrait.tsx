import { memo, useMemo, type ReactElement } from 'react'

import Portrait, { type PortraitProps } from '../atoms/Portrait'

const genImagesList = (date: string | number): PortraitProps[] => [
  {
    className: 'bg-accent',
    img: {
      src: `https://api.dicebear.com/5.x/lorelei/svg?seed=${date}`,
      alt: 'dicebear profile image'
    }
  },
  {
    className: 'bg-secondary',
    img: {
      src: `https://api.dicebear.com/5.x/lorelei/svg?seed=${date}88`,
      alt: 'dicebear second profile image'
    }
  },
  {
    className: 'bg-primary',
    img: {
      src: `https://api.dicebear.com/5.x/lorelei/svg?seed=${date}45`,
      alt: 'dicebear third profile image'
    }
  }
]

const AvatarsPortrait = memo(function _(): ReactElement {
  const date: number = useMemo(() => Date.now(), [])

  const imagesList = useMemo(() => genImagesList(date), [date])

  return (
    <div className='flex justify-between py-2'>
      {imagesList.map(({ img, ...attrs }) => (
        <Portrait key={img.src} img={img} {...attrs} />
      ))}
    </div>
  )
})

export default AvatarsPortrait
