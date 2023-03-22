import { motion, useAnimationControls } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { memo, useEffect, useMemo, type ReactElement } from 'react'

import iconMap from '~/icons/_iconMap'
import { alertAtom } from '~/state'

const Toast = memo(function _(): ReactElement {
  const alert = useAtomValue(alertAtom)
  const controls = useAnimationControls()

  useEffect(() => {
    if (alert.label.length > 0) {
      void controls.start({
        top: [-80, 80, 80, -80],
        scale: [0, 1, 1, 0],
        opacity: ['0%', '100%', '100%', '0%']
      })
    }
  }, [alert.label, alert.forceRender])

  const classes = useMemo(
    () => ['alert shadow-lg', alert.className].join(' '),
    [alert.className]
  )

  const transition = useMemo(
    () => ({
      duration: 3,
      ease: 'easeInOut',
      times: [0, 0.2, 0.8, 1],
      repeatDelay: 1
    }),
    []
  )

  return (
    <motion.div
      className='toast toast-top -top-20 z-10'
      animate={controls}
      transition={transition}
    >
      <div className={classes}>
        <span className='whitespace-nowrap'>
          {iconMap[alert.icon]}
          {alert.label}
        </span>
      </div>
    </motion.div>
  )
})

export default Toast
