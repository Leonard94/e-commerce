import { validateRegisterForm } from '@utils/validation/validationAuth'
import { useForm } from '../../useForm'

import { Input } from '@components/UI/Input/Input'
import { Button } from '@components/UI/Button/Button'

export const Register = () => {
  const { values, errors, handleInput, setErrors, handleOnFocus } = useForm({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const formErrors = validateRegisterForm(values)

    if (Object.keys(formErrors).length) {
      setErrors({ ...formErrors })
    } else {
      console.log('Отправляем запрос на регистрацию =>', values)
    }
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
        error={errors.firstName}
        onFocus={handleOnFocus}
      />
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
        error={errors.password}
        onFocus={handleOnFocus}
      />
      <Input
        label='Подтвердите пароль'
        name='confirmPassword'
        placeholder='Введите пароль'
        type='password'
        value={values.confirmPassword}
        onChange={handleInput}
        error={errors.confirmPassword}
        onFocus={handleOnFocus}
      />
      {/* <ErrorMessage error={error} /> */}
      <Button type='submit' view='primary' full>
        Зарегистрироваться
      </Button>
    </form>
  )
}
