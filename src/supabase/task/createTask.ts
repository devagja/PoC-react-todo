import supabase from '../client'

const createTask = async (label: string): Promise<never> => {
  const user = await supabase.auth.getUser()

  const res = await supabase
    .from('todos')
    .insert({
      task: label,
      user_id: user.data.user?.id
    })
    .single()

  if (res.error != null) {
    throw new Error()
  }

  return res.data
}

export default createTask
