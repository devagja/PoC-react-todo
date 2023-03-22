import type { PostgrestSingleResponse } from '@supabase/supabase-js'

import supabase from '../client'

const createTask = async (
  label: string
): Promise<PostgrestSingleResponse<null>> => {
  const user = await supabase.auth.getUser()

  const res = await supabase.from('todos').insert({
    task: label,
    user_id: user.data.user?.id
  })
  return res
}

export default createTask
