import type { Session, User } from '@supabase/supabase-js'

import supabase from '../client'

export interface responseData {
  user: User | null
  session: Session | null
}

const signInWithPassword = async (
  email: string,
  password: string
): Promise<responseData> => {
  const data = (await supabase.auth.signInWithPassword({ email, password }))
    .data

  return data
}

export default signInWithPassword
