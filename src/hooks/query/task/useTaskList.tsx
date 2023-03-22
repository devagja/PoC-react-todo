import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

import getTasks, { type tasksResponse } from '~/supabase/task/getTasks'

export const taskListQuery = (): UseQueryOptions<tasksResponse[], Error> => ({
  queryKey: ['tasks'],
  queryFn: async () => await getTasks()
})

function useTaskList(): UseQueryResult<tasksResponse[], Error> {
  const query = useQuery<tasksResponse[], Error>(taskListQuery())
  return query
}

export default useTaskList
