import supabase from '../client'

const setTaskStatus = async (id: number, status: boolean): Promise<never> => {
  const res = await supabase
    .from('todos')
    .update({ is_complete: status })
    .eq('id', id)
    .single()

  if (res.error != null) {
    throw new Error()
  }

  return res.data
}

export default setTaskStatus
