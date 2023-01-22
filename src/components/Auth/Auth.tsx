import { useState } from 'react'

import { TAuthMode } from '@type/user'

import { AuthLayout } from './components/AuthLayout/AuthLayout'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
// import { Confirm } from './components/Confirm/Confirm'

export const Auth = () => {
  const [mode, setMode] = useState<TAuthMode>('register')

  const changeMode = () => {
    setMode(mode === 'register' ? 'login' : 'register')
  }

  return (
    <AuthLayout mode={mode} changeMode={changeMode}>
      {mode === 'register' && <Register />}
      {mode === 'login' && <Login />}
      {/* {mode === 'confirm' && <Confirm />} */}
    </AuthLayout>
  )
}
