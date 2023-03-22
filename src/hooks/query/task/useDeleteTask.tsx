import { type PostgrestSingleResponse } from '@supabase/supabase-js'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import queryClient from '~/queryClient'
import { alertAtom, alertDeleteTask } from '~/state'
import deleteTask from '~/supabase/task/deleteTask'

function useDeleteTask(): UseMutationResult<
  PostgrestSingleResponse<null>,
  unknown,
  number,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation((idTask: number) => deleteTask(idTask), {
    onSuccess: () => {
      void queryClient.invalidateQueries(['tasks'])
      setAlert(alertDeleteTask())
    }
  })

  return mutation
}

export default useDeleteTask
