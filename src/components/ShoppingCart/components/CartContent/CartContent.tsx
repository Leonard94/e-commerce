import { useNavigate } from 'react-router-dom'

import { Button } from '@components/UI/Button/Button'
import { CartItem } from './CartItem/CartItem'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  decrementQuantity,
  deleteProduct,
  incrementQuantity,
} from '@store/cartSlice'
import { getDeclination } from '@utils/getDeclination'

import styles from './styles.module.scss'

type TProps = {
  closeShoppingCart: () => void
}

export const CartContent: React.FC<TProps> = ({ closeShoppingCart }) => {
  const { cartProductsList, itemsQuantity } = useAppSelector(
    (state) => state.cart
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDeleteItem = (size_id: number) => {
    dispatch(deleteProduct(size_id))
  }
  const handleIncrementQuantity = (size_id: number) => {
    dispatch(incrementQuantity(size_id))
  }
  const handleDecrementQuantity = (size_id: number) => {
    dispatch(decrementQuantity(size_id))
  }

  const handleCheckout = () => {
    // Отправить информацию о корзине
    navigate('/order')
    closeShoppingCart()
    // Перенаправить на страницу оформления заказа
  }

  const { cartTotal } = useAppSelector((state) => state.cart)

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {getDeclination(itemsQuantity, 'products')}
      </div>
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
        <Button type='button' view='rectangle' full onClick={handleCheckout}>
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
