import { useState } from 'react'

import { Input } from '@components/UI/Input/Input'
import { Button } from '@components/UI/Button/Button'

export const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log('Login')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label='Электронная почта'
        name='email'
        placeholder='test@test.com'
        type='text'
        value={values.email}
        onChange={handleInput}
      />
      <Input
        label='Пароль'
        name='password'
        placeholder='Введите пароль'
        type='password'
        value={values.password}
        onChange={handleInput}
      />
      {/* <ErrorMessage error={error} /> */}
      <Button type='submit' view='primary' full>
        Войти
      </Button>
    </form>
  )
}
