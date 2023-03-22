import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import { alertAtom, alertEmail, alertServiceErr } from '~/state'
import resetPasswordForEmail from '~/supabase/auth/resetPasswordForEmail'

function useResetPasswordForEmail(): UseMutationResult<
  {} | null,
  unknown,
  string,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation(
    (email: string) => resetPasswordForEmail(email),

    {
      onSuccess: () => {
        setAlert(alertEmail())
      },
      onError: () => {
        setAlert(alertServiceErr())
      }
    }
  )

  return mutation
}

export default useResetPasswordForEmail
