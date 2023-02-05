import styles from './styles.module.scss'

export const ItemOrder = () => {
  return (
    <li className={styles.item}>
      <div>
        <p>Пепперони</p>
        <span className={styles.size}>маленькая, 400 г</span>
      </div>
      <div className={styles.info}>
        <span className={styles.quantity}>7</span>
        <span className={styles.icon}>x</span>
        <span className={styles.total}>1232 руб.</span>
      </div>
    </li>
  )
}
