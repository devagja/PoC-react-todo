import { type AuthError } from '@supabase/supabase-js'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import { alertAtom, alertEmail, alertServiceErr } from '~/state'
import { type responseData } from '~/supabase/auth/signInWithPassword'
import signUp from '~/supabase/auth/signUp'

interface requestParams {
  email: string
  password: string
}

function useSignUp(): UseMutationResult<
  responseData,
  unknown,
  requestParams,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation(
    ({ email, password }: requestParams) => signUp(email, password),
    {
      onSuccess: () => {
        setAlert(alertEmail())
      },
      onError: (error: AuthError) => {
        setAlert(alertServiceErr(error.message))
      }
    }
  )

  return mutation
}

export default useSignUp
