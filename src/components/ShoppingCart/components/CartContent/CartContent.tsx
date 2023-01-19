import { Button } from '@components/UI/Button/Button'
import { CartItem } from './CartItem/CartItem'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from '@store/cartSlice'

import styles from './styles.module.scss'

export const CartContent = () => {
  const { cartProductsList, itemsQuantity } = useAppSelector(
    (state) => state.cart
  )
  const dispatch = useAppDispatch()

  const handleDeleteItem = (size_id: number) => {
    dispatch(deleteProduct(size_id))
  }
  const handleIncrementQuantity = (size_id: number) => {
    dispatch(incrementQuantity(size_id))
  }
  const handleDecrementQuantity = (size_id: number) => {
    dispatch(decrementQuantity(size_id))
  }

  const { cartTotal } = useAppSelector((state) => state.cart)

  return (
    <div className={styles.body}>
      <div className={styles.header}>{itemsQuantity + ' товаров'}</div>
      <div className={styles.content}>
        <ul className={styles.cartProductsList}>
          {cartProductsList.map((product) => (
            <CartItem
              key={product.size_id}
              {...product}
              incrementQuantity={handleIncrementQuantity}
              decrementQuantity={handleDecrementQuantity}
              deleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <div className={styles.total}>Сумма заказа: {cartTotal} руб.</div>
        <Button type='button' view='rectangle' full>
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
