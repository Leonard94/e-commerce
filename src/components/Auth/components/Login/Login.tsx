import { validateLoginForm } from '@utils/validation/validationAuth'
import { useForm } from '../../useForm'

import { Input } from '@components/UI/Input/Input'
import { Button } from '@components/UI/Button/Button'

export const Login = () => {
  const { values, errors, handleInput, setErrors, handleOnFocus } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const formErrors = validateLoginForm(values)

    if (Object.keys(formErrors).length) {
      setErrors({ ...formErrors })
    } else {
      console.log('Отправляем запрос на вход =>', values)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label='Электронная почта'
        name='email'
        placeholder='email@mail.com'
        type='text'
        value={values.email}
        onChange={handleInput}
        error={errors.email}
        onFocus={handleOnFocus}
      />
      <Input
        label='Пароль'
        name='password'
        placeholder='Введите пароль'
        type='password'
        value={values.password}
        onChange={handleInput}
        error={errors.email}
        onFocus={handleOnFocus}
      />
      {/* <ErrorMessage error={error} /> */}
      <Button type='submit' view='primary' full>
        Войти
      </Button>
    </form>
  )
}
