import { useCallback, useEffect, type ReactElement } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

import Input from '~/components/atoms/Input'
import { type HeroAttr } from '~/components/templates/AccessPortalLayout'
import useSignUp from '~/hooks/query/auth/useSignUp'
import useSignupForm, { type SignupFormFields } from '~/hooks/rhf/useSignupForm'

function Signup(): ReactElement {
  const { setHero } = useOutletContext<{
    setHero: ({ title, body }: HeroAttr) => void
  }>()
  useEffect(() => {
    setHero({
      title: 'Register now!🎉',
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

  const nav = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useSignupForm()

  const signUpMutation = useSignUp()

  const onSubmit: SubmitHandler<SignupFormFields> = useCallback(
    ({ email, password }): void => {
      void signUpMutation.mutateAsync({ email, password }).then(() => {
        nav('/login')
      })
    },
    []
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='rounded-md bg-accent px-2 py-2 text-accent-content'>
        <span className='text-xs'>
          🎉 We are very happy to <span className='font-bold'>welcome you</span>
        </span>
      </div>
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
      />
      <label className='label'>
        <Link to='/forgot-password' className='link-hover label-text-alt link'>
          Forgot password?
        </Link>
      </label>
      <label className='label'>
        <Link to='/login' className='link-hover label-text-alt link'>
          You have an account? go to login
        </Link>
      </label>
      <div className='form-control mt-6'>
        <button className='btn-primary btn'>Sign Up</button>
      </div>
    </form>
  )
}

export default Signup
