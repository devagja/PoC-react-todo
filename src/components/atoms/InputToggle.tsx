import { forwardRef, useMemo, type ReactElement } from 'react'

interface LabelAttr {
  value: string
  className?: string
}

interface ToggleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: LabelAttr
}

const InputToggle = forwardRef(function Input(
  { label, ...props }: ToggleInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): ReactElement {
  const labelRender = useMemo(
    () =>
      label != null && (
        <span className={[label.className, 'label-text'].join(' ')}>
          {label.value}
        </span>
      ),
    [label]
  )

  return (
    <div className='form-control'>
      <label className='label cursor-pointer justify-start gap-2'>
        {labelRender}
        <input
          {...props}
          type='checkbox'
          className='toggle-primary toggle'
          ref={ref}
        />
      </label>
    </div>
  )
})

export default InputToggle
