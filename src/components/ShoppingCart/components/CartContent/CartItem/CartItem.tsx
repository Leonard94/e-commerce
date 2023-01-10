import { Counter } from './Counter/Counter'

import * as Icon from '@assets/icons/index'
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
      <div className={styles.row}>
        <div className={styles.title}>{title}</div>
        <span className={styles.close}>
          <Icon.Close />
        </span>
      </div>
      <div className={styles.size}>{size}</div>
      <div className={styles.composition}>{composition}</div>
      <div className={styles.row}>
        <div className={styles.total}>{total} руб.</div>
        <Counter count={count} />
      </div>
    </li>
  )
}
