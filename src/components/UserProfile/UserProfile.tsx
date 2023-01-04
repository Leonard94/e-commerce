import styles from './styles.module.scss'

export const UserProfile = () => {
  // Если авторизован - аватар
  // Иначе показывать кнопку входа или регистрации
  const isAuth = true
  return <>{isAuth ? <div>Avatar</div> : <button>Войти</button>}</>
}
