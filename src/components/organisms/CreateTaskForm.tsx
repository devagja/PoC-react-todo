import { memo, useCallback, type ReactElement } from 'react'
import { type SubmitHandler } from 'react-hook-form'

import Input from '~/components/atoms/Input'
import useCreateTask from '~/hooks/query/task/useCreateTask'
import useCreateTaskForm, {
  type CreateTaskFormFields
} from '~/hooks/rhf/useCreateTaskForm'

const CreateTaskForm = memo(function _(): ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useCreateTaskForm()

  const createTaskMutation = useCreateTask()

  const onSubmit: SubmitHandler<CreateTaskFormFields> = useCallback(
    ({ task }, event): void => {
      event?.preventDefault()

      void createTaskMutation.mutateAsync(task).then(() => {
        reset()
      })
    },
    [createTaskMutation.reset]
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='sticky bottom-2 z-20 rounded-md bg-base-300 p-4'
    >
      <Input
        {...register('task')}
        placeholder='Write a task'
        error={errors.task?.message}
      />
      <button className='btn-primary btn w-full'>Create</button>
    </form>
  )
})

export default CreateTaskForm
