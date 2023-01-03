import { UserProfile } from '@components/UserProfile/UserProfile'
import { ShoppingCart } from '@components/ShoppingCart/ShoppingCart'

import { Logo } from './components/Logo/Logo'
import { Navigation } from './components/Navigation/Navigation'
import { Phone } from './components/Phone/Phone'

import styles from './styles.module.scss'

export const Header = () => {
  // @duplicate
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.inner}>
          <Logo />
          <Navigation />
          <Phone />
          <UserProfile />
          <ShoppingCart />
        </div>
      </div>
    </header>
  )
}
