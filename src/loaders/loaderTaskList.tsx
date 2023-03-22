import type { QueryClient } from '@tanstack/react-query'

import { taskListQuery } from '~/hooks/query/task/useTaskList'

const loaderTaskList =
  (queryClient: QueryClient) => async (): Promise<string[]> => {
    const query: any = taskListQuery()

    // ⬇️ return data or fetch it
    return await (queryClient.getQueryData(query.queryKey ?? '') ??
      (await queryClient.fetchQuery(query)))
  }

export default loaderTaskList
