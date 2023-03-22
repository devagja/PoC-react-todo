import supabase from '../client'

const resetPasswordForEmail = async (email: string): Promise<{} | null> => {
  const res = await supabase.auth.resetPasswordForEmail(email)

  if (res.error != null) {
    throw res.error
  }

  return res.data
}

export default resetPasswordForEmail
