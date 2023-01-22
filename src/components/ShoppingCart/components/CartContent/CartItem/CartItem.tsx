import { Counter } from './Counter/Counter'

import { TCartProduct } from '@type/cart'

import * as Icon from '@assets/icons/index'
import styles from './styles.module.scss'

type TProps = TCartProduct & {
  incrementQuantity: (product_id: number) => void
  decrementQuantity: (product_id: number) => void
  deleteItem: (product_id: number) => void
}

export const CartItem: React.FC<TProps> = ({
  title,
  composition,
  quantity,
  size_id,
  size_name,
  weight,
  totalPrice,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <div className={styles.title}>{title}</div>
        <span className={styles.close}>
          <Icon.Close onClick={() => deleteItem(size_id)} />
        </span>
      </div>
      <div className={styles.size}>
        {size_name}, {weight && weight}
      </div>
      <div className={styles.composition}>{composition}</div>
      <div className={styles.row}>
        <div className={styles.total}>{totalPrice} руб.</div>
        <Counter
          quantity={quantity}
          incrementQuantity={() => incrementQuantity(size_id)}
          decrementQuantity={() => decrementQuantity(size_id)}
        />
      </div>
    </li>
  )
}
