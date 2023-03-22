import { type AuthError } from '@supabase/supabase-js'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import { alertAtom, alertServiceErr, alertWelcome } from '~/state'
import signInWithPassword, {
  type responseData
} from '~/supabase/auth/signInWithPassword'

interface requestParams {
  email: string
  password: string
}

function useSignInWithPassword(): UseMutationResult<
  responseData,
  unknown,
  requestParams,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation(
    ({ email, password }: requestParams) => signInWithPassword(email, password),
    {
      onSuccess: () => {
        setAlert(alertWelcome())
      },
      onError: (error: AuthError) => {
        setAlert(alertServiceErr(error.message))
      }
    }
  )

  return mutation
}

export default useSignInWithPassword
