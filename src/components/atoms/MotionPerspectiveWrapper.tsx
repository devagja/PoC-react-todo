import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform
} from 'framer-motion'
import {
  type ReactElement,
  type MouseEvent,
  type ReactNode,
  useMemo,
  memo
} from 'react'

interface MotionPerspectiveWrapperProps {
  children: ReactNode
}

const MotionPerspectiveWrapper = memo(function _({
  children
}: MotionPerspectiveWrapperProps): ReactElement {
  const shouldReduceMotion = useReducedMotion()

  const x = useMotionValue(200)
  const y = useMotionValue(200)

  const rotateX = useTransform(y, [0, 400], [5, -5])
  const rotateY = useTransform(x, [0, 400], [-5, 5])

  const handleMouse = (event: MouseEvent): void => {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  const enableOptions = useMemo(
    () => ({ perspective: 400, rotateX, rotateY }),
    [rotateX, rotateY]
  )

  const disableOptions = useMemo(
    () => ({ perspective: 0, rotateX: 0, rotateY: 0 }),
    []
  )

  const motionParams = useMemo(() => {
    console.log(shouldReduceMotion)
    return shouldReduceMotion ?? false ? disableOptions : enableOptions
  }, [shouldReduceMotion, enableOptions, disableOptions])

  return (
    <motion.div
      style={{ perspective: motionParams.perspective }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          rotateX: motionParams.rotateX,
          rotateY: motionParams.rotateY
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
})

export default MotionPerspectiveWrapper
