import { type ReactNode, type ReactElement, memo } from 'react'

interface HeroProps {
  title: string
  children: ReactNode
}

const Hero = memo(function _({ title, children }: HeroProps): ReactElement {
  return (
    <div className='w-full max-w-[489px] bg-base-100 bg-opacity-30 p-2 text-center lg:text-left'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='max-w-lg py-6 transition-all'>{children}</p>
    </div>
  )
})

export default Hero
