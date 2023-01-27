import { validateRegisterForm } from '@utils/validation/validationAuth'
import { useForm } from '../../useForm'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import { register } from '@store/userSlice'

import { Input } from '@components/UI/Input/Input'
import { Button } from '@components/UI/Button/Button'

type TProps = {
  onClose: () => void
}

export const Register: React.FC<TProps> = ({ onClose }) => {
  const dispatch = useAppDispatch()
  const { error } = useAppSelector((state) => state.user)

  const { values, errors, handleInput, setErrors, handleOnFocus } = useForm({
    first_name: '',
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
      dispatch(register(values)).then((resp) => {
        if (resp.payload) onClose()
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label='Имя'
        name='first_name'
        placeholder='Vladislav'
        type='text'
        value={values.firstName}
        onChange={handleInput}
        error={errors.first_name}
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
      {error && <div>{error}</div>}
      {/* <ErrorMessage error={error} /> */}
      <Button type='submit' view='primary' full>
        Зарегистрироваться
      </Button>
    </form>
  )
}
