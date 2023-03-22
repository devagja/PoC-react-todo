import { useCallback, useEffect, type ReactElement } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

import Input from '~/components/atoms/Input'
import InputToggle from '~/components/atoms/InputToggle'
import AvatarsPortrait from '~/components/molecules/AvatarsPortrait'
import { type HeroAttr } from '~/components/templates/AccessPortalLayout'
import useResetPasswordForEmail from '~/hooks/query/auth/useResetPasswordForEmail'
import useSignInWithOtp from '~/hooks/query/auth/useSignInWithOtp'
import useForgotPassForm, {
  type ForgotPassFormFields
} from '~/hooks/rhf/useForgotPassForm'

interface SubmitParams {
  email: string
  magicLink: boolean
}

function ForgotPass(): ReactElement {
  const { setHero } = useOutletContext<{
    setHero: ({ title, body }: HeroAttr) => void
  }>()

  useEffect(() => {
    setHero({
      title: 'Forgot password?',
      body: (
        <>
          Do not worry, <span className='font-bold'>tell us your email</span>{' '}
          and we will send you a message{' '}
          <span className='font-bold'>to reset your password</span>
        </>
      )
    })
  }, [setHero])

  const nav = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForgotPassForm()

  const signInOtpMutation = useSignInWithOtp()
  const resetPasswordForEmailMutation = useResetPasswordForEmail()

  const onSubmit: SubmitHandler<ForgotPassFormFields> = useCallback(
    ({ email, magicLink }: SubmitParams): void => {
      if (magicLink) {
        void signInOtpMutation.mutateAsync(email)
      } else {
        void resetPasswordForEmailMutation.mutateAsync(email).then(() => {
          nav('/')
        })
      }
    },
    [resetPasswordForEmailMutation, signInOtpMutation, nav]
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full min-h-[408px] flex-col justify-between'
    >
      <div>
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
      </div>

      <AvatarsPortrait />
      <div>
        <label className='label'>
          <Link to='/signup' className='link-hover label-text-alt link'>
            Do not have an account yet? create it now
          </Link>
        </label>
        <div className='form-control mt-6'>
          <button className='btn-primary btn'>Send</button>
        </div>
      </div>
    </form>
  )
}

export default ForgotPass
