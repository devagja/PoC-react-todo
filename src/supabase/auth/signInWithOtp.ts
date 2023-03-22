import { type responseData } from './signInWithPassword'
import supabase from '../client'

const signInWithOtp = async (email: string): Promise<responseData> => {
  const data = (await supabase.auth.signInWithOtp({ email })).data

  return data
}

export default signInWithOtp
