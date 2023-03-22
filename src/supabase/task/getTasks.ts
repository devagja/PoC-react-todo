import supabase from '../client'

export interface tasksResponse {
  isComplete: boolean
  idTask: number
  task: string
}

const getTasks = async (): Promise<tasksResponse[]> => {
  const res = await supabase.from('todos').select('task,id,is_complete')

  if (res.error != null) {
    throw new Error(res.error.message)
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return res.data.map(({ is_complete, id, ...data }) => ({
    ...data,
    idTask: id,
    isComplete: is_complete
  }))
}

export default getTasks
