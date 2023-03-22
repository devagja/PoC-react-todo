import { motion } from 'framer-motion'
import { atom, useAtom } from 'jotai'
import { type ReactNode, type ReactElement, memo } from 'react'
import { Outlet } from 'react-router-dom'

import Hero from '~/components/atoms/Hero'
import MotionPerspectiveWrapper from '~/components/atoms/MotionPerspectiveWrapper'
import { transition } from '~/motion'

export interface HeroAttr {
  title: string
  body: ReactNode
}

const heroAtom = atom<HeroAttr>({ title: '', body: '' })

const AccessPortalLayout = memo(function _(): ReactElement {
  const [hero, setHero] = useAtom(heroAtom)

  return (
    <div>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <MotionPerspectiveWrapper>
          <Hero title={hero.title}>{hero.body}</Hero>
        </MotionPerspectiveWrapper>
        <motion.div
          initial={false}
          whileHover={{ scale: 1.01 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className='card w-full max-w-sm flex-shrink-0 bg-base-100 p-8 shadow-2xl'
        >
          <Outlet context={{ setHero }} />
        </motion.div>
      </div>
    </div>
  )
})

export default AccessPortalLayout
