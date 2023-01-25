import { TErrors } from '@type/auth'
import { useState } from 'react'

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<TErrors>({})

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnFocus = (e: any) => {
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  return { values, errors, handleInput, handleOnFocus, setErrors }
}
