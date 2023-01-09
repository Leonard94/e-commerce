import styles from './styles.module.scss'

const title = 'Пепперони'
const size = '30 см, 550 г'
const composition =
  'Итальянские травы, томатный соус, томаты, кубики брынзы, красный лук, сладкий перец, маслины, моцарелла, шампиньоны'
const count = 1
const total = '899'

export const CartItem = () => {
  return (
    <li className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.size}>{size}</div>
      <div className={styles.composition}>{composition}</div>
      <div className={styles.row}>
        <div className={styles.total}>{total}</div>
        <div className={styles.counter}>{count}</div>
      </div>
    </li>
  )
}
