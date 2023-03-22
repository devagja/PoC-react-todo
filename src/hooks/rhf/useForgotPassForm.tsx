import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormReturn } from 'react-hook-form'

import { schemaForgotPassword } from '~/zodSchemas'

export interface ForgotPassFormFields {
  email: string
  magicLink: boolean
}

function useForgotPassForm(): UseFormReturn<ForgotPassFormFields, any> {
  const form = useForm<ForgotPassFormFields>({
    defaultValues: { email: '', magicLink: false },
    resolver: zodResolver(schemaForgotPassword)
  })

  return form
}

export default useForgotPassForm
