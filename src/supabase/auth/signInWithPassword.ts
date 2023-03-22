import type { Session, User } from '@supabase/supabase-js'

import supabase from '../client'

export interface responseData {
  user: User | null
  session: Session | null
}

const signInWithPassword = async (
  email: string,
  password: string
): Promise<any> => {
  const res = await supabase.auth.signInWithPassword({ email, password })

  if (res.error != null) {
    throw res.error
  }

  return res.data
}

export default signInWithPassword
