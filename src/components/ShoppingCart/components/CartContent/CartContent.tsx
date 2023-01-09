import { Button } from '@components/UI/Button/Button'
import { CartItem } from './CartItem/CartItem'
import styles from './styles.module.scss'

type TProps = {
  items: []
  total: string
}

export const CartContent = ({ items, total }: any) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {items.length && items.length + ' товаров'}
      </div>
      <div className={styles.content}>
        <ul className={styles.items}>
          {items.map((item: any, index: number) => (
            <CartItem key={index} />
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <div className={styles.total}>Сумма заказа: 10000 руб.</div>
        <Button type='button' view='primary' full>
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
