import { useMemo, type ReactElement } from 'react'

export interface PortraitProps {
  img: React.ImgHTMLAttributes<HTMLImageElement>
  className?: string
  [x: string]: any
}

const Portrait = function _({
  img,
  className,
  ...props
}: PortraitProps): ReactElement {
  const classes = useMemo(
    () => [className, 'avatar w-1/3 rounded sm:w-24'].join(' '),
    [className]
  )

  return (
    <div {...props} className={classes}>
      <img {...img} loading='lazy' />
    </div>
  )
}

export default Portrait
