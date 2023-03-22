import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm, type UseFormReturn } from 'react-hook-form'

import { schemaLogin } from '~/zodSchemas'

export interface LoginFormFields {
  password: string
  email: string
  magicLink: boolean
}

function useLoginForm(): UseFormReturn<LoginFormFields, any> {
  const form = useForm<LoginFormFields>({
    defaultValues: { email: '', password: '', magicLink: false },
    resolver: zodResolver(schemaLogin)
  })

  const watchMagicLink = form.watch('magicLink')

  useEffect(() => {
    if (watchMagicLink) {
      void form.trigger('password')
    }
  }, [watchMagicLink])

  return form
}

export default useLoginForm
