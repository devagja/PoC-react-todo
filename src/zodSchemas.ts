import { z } from 'zod'

const email = z.string().email().min(5)
const password = z.string().min(10)
const task = z.string().min(4)
const magicLink = z.boolean()

export const schemaCreateTask = z.object({
  task
})

export const schemaForgotPassword = z.object({
  email
})

export const schemaSignUp = z.object({
  email,
  password
})

export const schemaLogin = z
  .object({
    email,
    magicLink,
    password: z.string()
  })
  .refine(
    data => {
      if (!data.magicLink) {
        if (typeof data.password === 'string' && data.password.length < 10) {
          return false
        }
      }
      return true
    },
    {
      message: 'Invalid password',
      path: ['password']
    }
  )
