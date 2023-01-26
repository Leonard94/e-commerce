export const FIRST_NAME_SIZE = {
  min: 3,
  max: 30,
}

export const EMAIL_SIZE = {
  min: 5,
  max: 128,
}

export const PASSWORD_SIZE = {
  min: 6,
  max: 128,
}

export const VALIDATE_ERRORS = {
  firstNameNotExists: 'Введите, пожалуйста, ваше имя',
  emailNotExists: 'Введите, пожалуйста, вашу электронную почту',
  passwordNotExists: 'Введите, пожалуйста, пароль',
  confirmPasswordNotExists: 'Введите пароль ещё раз',

  firstNameWrongSize: `Имя должно содержать от ${FIRST_NAME_SIZE.min} до ${FIRST_NAME_SIZE.max} букв`,
  emailWrongSize: `Электронная почта должна содержать более ${EMAIL_SIZE.min} символов`,
  passwordWrongSize: `Пароль не может быть короче ${PASSWORD_SIZE.min} символов`,

  passwordNotCorrect:
    'Пароль должен содержать хотя бы одну заглавную латинскую букву и хотя бы одну цифру',
  emailNotCorrect: 'Введите, пожалуйста, корректную электронную почту',
  passwordsNotMatch: 'Пароли не совпадают',
}
