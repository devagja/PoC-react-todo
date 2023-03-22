import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormReturn } from 'react-hook-form'

import { schemaCreateTask } from '~/zodSchemas'

export interface CreateTaskFormFields {
  task: string
}

function useCreateTaskForm(): UseFormReturn<CreateTaskFormFields, any> {
  const form = useForm<CreateTaskFormFields>({
    defaultValues: { task: '' },
    resolver: zodResolver(schemaCreateTask)
  })

  return form
}

export default useCreateTaskForm
