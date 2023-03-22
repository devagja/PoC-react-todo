import supabase from '../client'

export interface tasksResponse {
  isComplete: boolean
  idTask: number
  task: string
}

const getTasks = async (): Promise<tasksResponse[]> => {
  const data = (await supabase.from('todos').select('task,id,is_complete')).data

  if (data != null) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return data.map(({ is_complete, id, ...data }) => ({
      ...data,
      idTask: id,
      isComplete: is_complete
    }))
  }
  return [
    {
      isComplete: false,
      idTask: -1,
      task: ''
    }
  ]
}

export default getTasks
