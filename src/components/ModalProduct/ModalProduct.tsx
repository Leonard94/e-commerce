import { Button } from '@components/UI/Button/Button'
import { SizeSwitch } from './SizeSwitch/SizeSwitch'

import styles from './styles.module.scss'

const title = 'Пепперони'
const size = '30 см, 580 г'
const composition =
  'Томатный соус, колбаски пепперони, моцарелла, цыпленок, соус бургер, томаты, сладкий перец, лук красный, чеснок, соус ранч'
const price = '799'

export const ModalProduct = () => {
  return (
    <div className={styles.body}>
      <div className={styles.photo}>
        <img
          src='http://localhost:4000/static/products/pepperoni-preview.webp'
          alt=''
        />
      </div>
      <div className={styles.product}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.size}>{size}</div>
          <div className={styles.composition}>{composition}</div>
          <SizeSwitch />
        </div>
        <Button type='button' view='primary'>
          Добавить в корзину за {price} руб.
        </Button>
      </div>
    </div>
  )
}
