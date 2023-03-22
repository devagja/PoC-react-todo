import supabase from '../client'

const resetPasswordForEmail = async (email: string): Promise<{} | null> => {
  const data = (await supabase.auth.resetPasswordForEmail(email)).data

  return data
}

export default resetPasswordForEmail
