import { useAppSelector } from '@store/hooks'

import { ItemOrder } from './ItemOrder/ItemOrder'

import styles from './styles.module.scss'

export const CurrentOrder = () => {
  const { cartProductsList, cartTotal } = useAppSelector((state) => state.cart)
  return (
    <div className={styles.order}>
      <p className={styles.title}>Ваш заказ</p>
      <ul>
        {cartProductsList.map((product) => (
          <ItemOrder key={product.product_id} {...product} />
        ))}
      </ul>
      <span className={styles.line} />
      <div className={styles.total}>
        <p className={styles.totoal_title}>Сумма заказа</p>
        <span className={styles.total_sum}>{cartTotal} руб.</span>
      </div>
    </div>
  )
}
