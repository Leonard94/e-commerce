import { ItemOrder } from './ItemOrder/ItemOrder'
import styles from './styles.module.scss'

export const CurrentOrder = () => {
  return (
    <div className={styles.order}>
      <p className={styles.title}>Ваш заказ</p>
      <ul>
        <ItemOrder />
        <ItemOrder />
        <ItemOrder />
      </ul>
      <span className={styles.line} />
      <div className={styles.total}>
        <p>Сумма заказа</p>
        <span>123 123 руб.</span>
      </div>
    </div>
  )
}
