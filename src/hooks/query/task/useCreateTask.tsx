import { type PostgrestSingleResponse } from '@supabase/supabase-js'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import queryClient from '~/queryClient'
import { alertAtom, alertTaskAdded } from '~/state'
import createTask from '~/supabase/task/createTask'

function useCreateTask(): UseMutationResult<
  PostgrestSingleResponse<null>,
  unknown,
  string,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation((label: string) => createTask(label), {
    onSuccess: () => {
      void queryClient.invalidateQueries(['tasks'])
      setAlert(alertTaskAdded())
    }
  })

  return mutation
}

export default useCreateTask
