import { useCallback, useMemo, type ReactElement } from 'react'

import Table from '~/components/atoms/Table'
import TrashIcon from '~/icons/TrashIcon'
import { type tasksResponse } from '~/supabase/task/getTasks'

interface TasksTableProps {
  tasksRows?: tasksResponse[]
  showCompletedTask?: Boolean
  onItemCheck: (e: React.ChangeEvent<HTMLInputElement>, idTask: number) => void
  onItemDelete: (idTask: number) => void
}

function TasksTable({
  tasksRows,
  showCompletedTask = false,
  onItemCheck,
  onItemDelete
}: TasksTableProps): ReactElement {
  const defaultTableRow = useMemo(
    () => (
      <tr>
        <th className='w-4'>
          <input type='checkbox' className='checkbox-primary checkbox' />
        </th>
        <td>
          Create your first Task ⬇️
          <br />
          <span className='badge-accent badge badge-sm'>
            Let&apos;s go, you can do it
          </span>
        </td>
        <th className='sticky right-0 w-4 '></th>
      </tr>
    ),
    []
  )

  const genTableDataRows = useCallback(
    ({ idTask, isComplete, task }: tasksResponse) => (
      <tr key={idTask}>
        <th className='w-4'>
          <input
            defaultChecked={isComplete}
            onChange={e => {
              onItemCheck(e, idTask)
            }}
            type='checkbox'
            className='checkbox-primary checkbox'
          />
        </th>
        <td className={isComplete ? 'line-through' : ''}>
          {task}
          <br />
          <span className='badge-accent badge badge-sm'>Tag</span>
        </td>
        <th className='sticky right-0 w-4 '>
          <button
            onClick={() => {
              onItemDelete(idTask)
            }}
            className='btn-square btn-xs btn mb-2 '
          >
            <TrashIcon />
          </button>
        </th>
      </tr>
    ),
    [onItemDelete, onItemCheck]
  )

  const tableRows = useMemo(
    () =>
      tasksRows != null && tasksRows?.length > 0
        ? tasksRows
            .filter(({ isComplete }) =>
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              showCompletedTask ? true : !isComplete
            )
            .map(genTableDataRows)
        : defaultTableRow,
    [tasksRows, showCompletedTask, defaultTableRow, genTableDataRows]
  )

  return <Table>{tableRows}</Table>
}

export default TasksTable
