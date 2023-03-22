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
  const data = (await supabase.auth.signUp({ email, password })).data

  return data
}

export default signUp
