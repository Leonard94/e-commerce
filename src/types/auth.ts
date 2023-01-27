export type TErrors = {
  first_name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export type TFormDataRegister = {
  first_name: string
  email: string
  password: string
  confirmPassword: string
}

export type TFormDataLogin = {
  email: string
  password: string
}
