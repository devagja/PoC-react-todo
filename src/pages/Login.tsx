import { useSetAtom } from 'jotai'
import { useCallback, useEffect, type ReactElement } from 'react'
import { type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

import Input from '~/components/atoms/Input'
import InputToggle from '~/components/atoms/InputToggle'
import { type HeroAttr } from '~/components/templates/AccessPortalLayout'
import useSignInWithOtp from '~/hooks/query/auth/useSignInWithOtp'
import useSignInWithPassword from '~/hooks/query/auth/useSignInWithPassword'
import useLoginForm, { type LoginFormFields } from '~/hooks/rhf/useLoginForm'
import { alertAtom } from '~/state'

function Login(): ReactElement {
  const { setHero } = useOutletContext<{
    setHero: ({ title, body }: HeroAttr) => void
  }>()
  useEffect(() => {
    setHero({
      title: '🎉Login now!🎉',
      body: (
        <>
          Start to <span className='font-bold'>meet</span> your goals, get
          metrics of your results and <span className='font-bold'>share</span>{' '}
          your achievements with your people,{' '}
          <span className='font-bold'>progress in your life</span>.
        </>
      )
    })
  }, [setHero])

  const setAlert = useSetAtom(alertAtom)

  const signInOtpMutation = useSignInWithOtp()
  const signInPasswordMutation = useSignInWithPassword()

  const nav = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useLoginForm()

  const watchMagicLink = watch('magicLink')

  const onSubmit: SubmitHandler<LoginFormFields> = useCallback(
    ({ email, password, magicLink }, event): void => {
      event?.preventDefault()
      if (magicLink) {
        void signInOtpMutation.mutateAsync(email)
      } else {
        void signInPasswordMutation
          .mutateAsync({ email, password })
          .then(() => {
            nav('/')
          })
      }
    },
    [setAlert, nav, signInOtpMutation, signInPasswordMutation]
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputToggle
        label={{
          value: 'Use MagicLink via email',
          className: 'label-text-alt'
        }}
        {...register('magicLink')}
      />
      <Input
        {...register('email')}
        label='Email'
        placeholder='account@gmail.com'
        error={errors.email?.message}
      />
      <Input
        {...register('password')}
        label='Password'
        placeholder='pTJSZwYfuA'
        error={errors.password?.message}
        disabled={watchMagicLink}
      />
      <label className='label'>
        <Link to='/forgot-password' className='link-hover label-text-alt link'>
          Forgot password?
        </Link>
      </label>
      <label className='label'>
        <Link to='/signup' className='link-hover label-text-alt link'>
          Do not have an account yet? create it now
        </Link>
      </label>
      <div className='form-control mt-6'>
        <button className='btn-primary btn'>Login</button>
      </div>
    </form>
  )
}

export default Login
