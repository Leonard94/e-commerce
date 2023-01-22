import { useState } from 'react'

import { Input } from '@components/UI/Input/Input'
import { Button } from '@components/UI/Button/Button'

export const Register = () => {
  const [values, setValues] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errorFirstName, setErrorFirstName] = useState<null | string>(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log('Register without validation')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label='Имя'
        name='firstName'
        placeholder='Vladislav'
        type='text'
        value={values.firstName}
        onChange={handleInput}
        error={errorFirstName}
        onFocus={() => setErrorFirstName(null)}
      />
      <Input
        label='Электронная почта'
        name='email'
        placeholder='mail@mail.com'
        type='text'
        value={values.email}
        onChange={handleInput}
        error={errorEmail}
        onFocus={() => setErrorEmail(null)}
      />
      <Input
        label='Пароль'
        name='password'
        placeholder='Введите пароль'
        type='password'
        value={values.password}
        onChange={handleInput}
        error={errorPassword}
        onFocus={() => setErrorPassword(null)}
      />
      <Input
        label='Подтвердите пароль'
        name='confirmPassword'
        placeholder='Введите пароль'
        type='password'
        value={values.confirmPassword}
        onChange={handleInput}
        error={errorConfirmPassword}
        onFocus={() => setErrorConfirmPassword(null)}
      />
      {/* <ErrorMessage error={error} /> */}
      <Button type='submit' view='primary' full>
        Зарегистрироваться
      </Button>
    </form>
  )
}
