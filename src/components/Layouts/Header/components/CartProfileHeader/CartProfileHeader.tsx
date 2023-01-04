import { ShoppingCart } from '@components/ShoppingCart/ShoppingCart'
import { UserProfile } from '@components/UserProfile/UserProfile'

import styles from './styles.module.scss'

export const CartProfileHeader = () => {
  return (
    <div className={styles.body}>
      <UserProfile />
      <ShoppingCart />
    </div>
  )
}
