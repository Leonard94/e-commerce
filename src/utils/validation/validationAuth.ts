import { TErrors, TFormDataLogin, TFormDataRegister } from '@type/auth'
import {
  hasCapitalAndDigit,
  hasEmailCorrectFormat,
  hasRequiredSize,
  hasValuesMatch,
  isExists,
} from '@utils/validation/validation.helpers'
import {
  FIRST_NAME_SIZE,
  EMAIL_SIZE,
  PASSWORD_SIZE,
  VALIDATE_ERRORS,
} from './validationConst'

const validateFirstName = (first_name: string, error: TErrors) => {
  if (!isExists(first_name)) {
    error.first_name = VALIDATE_ERRORS.firstNameNotExists
    return
  }
  if (!hasRequiredSize(first_name, FIRST_NAME_SIZE.min, FIRST_NAME_SIZE.max)) {
    error.first_name = VALIDATE_ERRORS.firstNameWrongSize
    return
  }
}

const validateEmail = (email: string, error: TErrors) => {
  if (!isExists(email)) {
    error.email = VALIDATE_ERRORS.emailNotExists
    return
  }
  if (!hasRequiredSize(email, EMAIL_SIZE.min, EMAIL_SIZE.max)) {
    error.email = VALIDATE_ERRORS.emailWrongSize
    return
  }
  if (!hasEmailCorrectFormat(email)) {
    error.email = VALIDATE_ERRORS.emailNotCorrect
    return
  }
}

const validatePassword = (password: string, error: TErrors) => {
  if (!isExists(password)) {
    error.password = VALIDATE_ERRORS.passwordNotExists
    return
  }
  if (!hasRequiredSize(password, PASSWORD_SIZE.min, PASSWORD_SIZE.max)) {
    error.password = VALIDATE_ERRORS.passwordWrongSize
    return
  }
  if (!hasCapitalAndDigit(password)) {
    error.password = VALIDATE_ERRORS.passwordNotCorrect
    return
  }
}

const validateConfirmPassword = (
  confirmPassword: string,
  password: string,
  error: TErrors
) => {
  if (!isExists(confirmPassword)) {
    error.confirmPassword = VALIDATE_ERRORS.confirmPasswordNotExists
    return
  }
  if (!hasValuesMatch(password, confirmPassword)) {
    error.confirmPassword = VALIDATE_ERRORS.passwordsNotMatch
    return
  }
}

export const validateRegisterForm = (formData: TFormDataRegister) => {
  const errors: TErrors = {}

  validateFirstName(formData.first_name, errors)
  validateEmail(formData.email, errors)
  validatePassword(formData.password, errors)
  validateConfirmPassword(formData.confirmPassword, formData.password, errors)

  return errors
}

export const validateLoginForm = (formData: TFormDataLogin) => {
  const errors: TErrors = {}

  validateEmail(formData.email, errors)
  validatePassword(formData.password, errors)

  return errors
}
