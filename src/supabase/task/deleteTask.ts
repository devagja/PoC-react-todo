import supabase from '../client'

const deleteTask = async (id: number): Promise<never> => {
  const res = await supabase.from('todos').delete().eq('id', id).single()

  if (res.error != null) {
    throw new Error()
  }

  return res.data
}

export default deleteTask
