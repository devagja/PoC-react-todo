import type { Session, User } from '@supabase/supabase-js'

import supabase from '../client'

export interface responseData {
  user: User | null
  session: Session | null
}

const signUp = async (
  email: string,
  password: string
): Promise<responseData> => {
  const res = await supabase.auth.signUp({ email, password })

  if (res.error != null) {
    throw res.error
  }

  return res.data
}

export default signUp
