import type { PostgrestSingleResponse } from '@supabase/supabase-js'

import supabase from '../client'

const deleteTask = async (
  id: number
): Promise<PostgrestSingleResponse<null>> => {
  const res = await supabase.from('todos').delete().eq('id', id)

  return res
}

export default deleteTask
