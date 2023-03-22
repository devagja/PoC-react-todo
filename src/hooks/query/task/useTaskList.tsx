import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

import { alertAtom, alertServiceErr } from '~/state'
import getTasks, { type tasksResponse } from '~/supabase/task/getTasks'

export const taskListQuery = (): UseQueryOptions<tasksResponse[], Error> => ({
  queryKey: ['tasks'],
  queryFn: async () => await getTasks()
})

function useTaskList(): UseQueryResult<tasksResponse[], Error> {
  const setAlert = useSetAtom(alertAtom)

  const query = useQuery<tasksResponse[], Error>({
    ...taskListQuery(),
    onError: (error: Error) => {
      setAlert(alertServiceErr(error.message))
    }
  })

  return query
}

export default useTaskList
