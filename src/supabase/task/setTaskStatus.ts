import type { PostgrestSingleResponse } from '@supabase/supabase-js'

import supabase from '../client'

const setTaskStatus = async (
  id: number,
  status: boolean
): Promise<PostgrestSingleResponse<null>> => {
  const res = await supabase
    .from('todos')
    .update({ is_complete: status })
    .eq('id', id)

  return res
}

export default setTaskStatus
