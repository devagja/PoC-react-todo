import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormReturn } from 'react-hook-form'

import { schemaSignUp } from '~/zodSchemas'

export interface SignupFormFields {
  email: string
  password: string
}

function useSignupForm(): UseFormReturn<SignupFormFields, any> {
  const form = useForm<SignupFormFields>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schemaSignUp)
  })

  return form
}

export default useSignupForm
