import { validateLoginForm } from '@utils/validation/validationAuth'
import { useForm } from '../../useForm'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import { login } from '@store/userSlice'

import { Input } from '@components/UI/Input/Input'
import { Button } from '@components/UI/Button/Button'

type TProps = {
  onClose: () => void
}

export const Login: React.FC<TProps> = ({ onClose }) => {
  const dispatch = useAppDispatch()
  const { error } = useAppSelector((state) => state.user)

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
      dispatch(login(values)).then((resp) => {
        if (resp.payload) onClose()
      })
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
        error={errors.password}
        onFocus={handleOnFocus}
      />
      {error && <div>{error}</div>}
      {/* <ErrorMessage error={error} /> */}
      <Button type='submit' view='primary' full>
        Войти
      </Button>
    </form>
  )
}
