import { type AuthError } from '@supabase/supabase-js'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import { alertAtom, alertEmail, alertServiceErr } from '~/state'
import signInWithOtp from '~/supabase/auth/signInWithOtp'
import { type responseData } from '~/supabase/auth/signInWithPassword'

function useSignInWithOtp(): UseMutationResult<
  responseData,
  unknown,
  string,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation(
    (email: string) => signInWithOtp(email),

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

export default useSignInWithOtp
