import { forwardRef, useMemo, type ReactElement } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error: string
  [x: string]: any
}

const Input = forwardRef(function _(
  { label, error = '', ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): ReactElement {
  const labelRender = useMemo(
    () =>
      label != null && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      ),
    [label]
  )

  return (
    <div className='form-control'>
      {labelRender}
      <input
        {...props}
        type='text'
        className='input-bordered input'
        ref={ref}
      />
      <label className='label-text-alt label min-h-8 text-error'>{error}</label>
    </div>
  )
})

export default Input
