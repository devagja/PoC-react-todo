import { type PostgrestSingleResponse } from '@supabase/supabase-js'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import queryClient from '~/queryClient'
import { alertAtom, alertDoneTask, alertServiceErr, alertUndoneTask } from '~/state'
import setTaskStatus from '~/supabase/task/setTaskStatus'

interface mutate {
  idTask: number
  status: boolean
}

function useCheckTask(): UseMutationResult<
  PostgrestSingleResponse<null>,
  unknown,
  mutate,
  unknown
> {
  const setAlert = useSetAtom(alertAtom)

  const mutation = useMutation(
    ({ idTask, status }: mutate) => setTaskStatus(idTask, status),
    {
      onSuccess: (a, { status }) => {
        void queryClient.invalidateQueries(['tasks'])
        setAlert(status ? alertDoneTask() : alertUndoneTask())
      },
      onError: () => {
        setAlert(alertServiceErr())
      }
    }
  )

  return mutation
}

export default useCheckTask
