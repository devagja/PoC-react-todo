import { motion } from 'framer-motion'
import { atom, useAtom } from 'jotai'
import { useCallback, useMemo, type ReactElement } from 'react'

import InputToggle from '~/components/atoms/InputToggle'
import TasksTable from '~/components/molecules/TasksTable'
import CreateTaskForm from '~/components/organisms/CreateTaskForm'
import useCheckTask from '~/hooks/query/task/useCheckTask'
import useDeleteTask from '~/hooks/query/task/useDeleteTask'
import useTaskList from '~/hooks/query/task/useTaskList'
import { transition } from '~/motion'

const showCompletedTask = atom(true)

function Home(): ReactElement {
  const { data, isLoading } = useTaskList()
  const [show, setShow] = useAtom(showCompletedTask)

  const deleteTaskMutation = useDeleteTask()
  const checkTaskMutation = useCheckTask()

  const handleCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idTask: number) => {
      const status = e.target.checked
      void checkTaskMutation.mutateAsync({ idTask, status })
    },
    [checkTaskMutation]
  )

  const handleDelete = useCallback(
    (idTask: number): any => {
      void deleteTaskMutation.mutateAsync(idTask)
    },
    [deleteTaskMutation]
  )

  const animate = useMemo(
    () => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, ...transition }
    }),
    []
  )

  const MTaskTable = useMemo(
    () => (
      <TasksTable
        tasksRows={data}
        showCompletedTask={show}
        onItemCheck={handleCheck}
        onItemDelete={handleDelete}
      />
    ),
    [data, show, handleCheck, handleDelete]
  )

  return (
    <motion.div
      className='container card-body relative flex min-h-[calc(100vh-80px)] max-w-[100vw] flex-col gap-2 px-0 sm:max-w-2xl '
      transition={transition}
      exit='exit'
      initial={{ opacity: 0, y: 20 }}
      animate={animate}
    >
      <div className='flex w-full flex-col gap-4'>
        <h1 className='flex items-baseline justify-between px-2 text-5xl font-bold'>
          Tasks
          <InputToggle
            label={{ value: 'Completed' }}
            defaultChecked={show}
            onChange={e => {
              setShow(e.target.checked)
            }}
          />
        </h1>
        <div className='overflow-x-auto'>
          {isLoading && 'loading'}
          {MTaskTable}
        </div>
      </div>
      <CreateTaskForm />
    </motion.div>
  )
}

export default Home
