import { ReactComponent as Img } from '@assets/icons/not-found.svg'
import styles from './styles.module.scss'

export const CartIsEmpty = () => {
  return (
    <div className={styles.body}>
      <div className={styles.inner}>
        <Img />
        <p className={styles.title}>Ваша корзина пуста 😔</p>
        <p className={styles.subtitle}>
          Выберите что-нибудь вкусное и возвращайтесь скорее для оформления
          заказа
        </p>
      </div>
    </div>
  )
}
