import { useState } from 'react'

import { TAuthMode } from '@type/user'

import { AuthLayout } from './components/AuthLayout/AuthLayout'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
// import { Confirm } from './components/Confirm/Confirm'

type TProps = {
  onClose: () => void
}

export const Auth: React.FC<TProps> = ({ onClose }) => {
  const [mode, setMode] = useState<TAuthMode>('register')

  const changeMode = () => {
    setMode(mode === 'register' ? 'login' : 'register')
  }

  return (
    <AuthLayout mode={mode} changeMode={changeMode}>
      {mode === 'register' && <Register onClose={onClose} />}
      {mode === 'login' && <Login onClose={onClose} />}
      {/* {mode === 'confirm' && <Confirm />} */}
    </AuthLayout>
  )
}
