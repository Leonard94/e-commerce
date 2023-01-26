import { TError, TStatus } from './general'

export type TInitialStateUser = {
  isAuth: Boolean
  userInfo: TUser | null
  status: TStatus
  error: TError
}

export type TAuthMode = 'register' | 'login' | 'confirm'

type TUser = {
  user_id: number
  email: string
  active: Boolean
  phone: string
  firstName: string
  lastName?: string
  avatar_url?: string
}
