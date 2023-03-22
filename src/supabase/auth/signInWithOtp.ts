import { type responseData } from './signInWithPassword'
import supabase from '../client'

const signInWithOtp = async (email: string): Promise<responseData> => {
  const res = await supabase.auth.signInWithOtp({ email })

  if (res.error != null) {
    throw res.error
  }

  return res.data
}

export default signInWithOtp
