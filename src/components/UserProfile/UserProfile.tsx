import { Button } from '@components/UI/Button/Button'
import { getFirstLetterName } from '@utils/getFirstLetterName'

import styles from './styles.module.scss'

export const UserProfile = () => {
  // Если авторизован - аватар
  // Иначе показывать кнопку входа или регистрации
  const isAuth = true
  const first_name = null
  const second_name = null

  return (
    <>
      {isAuth ? (
        <div className={styles.avatar}>
          <span>{getFirstLetterName(first_name, second_name)}</span>
        </div>
      ) : (
        <Button type='button' view='secondary'>
          Войти
        </Button>
      )}
    </>
  )
}
