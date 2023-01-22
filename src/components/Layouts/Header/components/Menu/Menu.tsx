import { ShoppingCart } from '@components/ShoppingCart/ShoppingCart'
import { Navigation } from './Navigation/Navigation'
import styles from './styles.module.scss'

export const Menu = () => {
  return (
    <div className={styles.body}>
      <Navigation />
      <ShoppingCart />
    </div>
  )
}
