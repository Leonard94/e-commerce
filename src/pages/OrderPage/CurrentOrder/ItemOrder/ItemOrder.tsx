import { TCartProduct } from '@type/cart'

import styles from './styles.module.scss'

export const ItemOrder: React.FC<TCartProduct> = ({
  title,
  size_name,
  weight,
  quantity,
  totalPrice,
}) => {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.title}>{title}</p>
        <span className={styles.size}>
          {size_name}{weight && `, ${weight}`}
        </span>
      </div>
      <div className={styles.info}>
        <span>{quantity}</span>
        <span>x</span>
        <span>{totalPrice} руб.</span>
      </div>
    </li>
  )
}
