import { Logo } from './components/Logo/Logo'
import { Navigation } from './components/Navigation/Navigation'
import { Phone } from './components/Phone/Phone'
import { CartProfileHeader } from './components/CartProfileHeader/CartProfileHeader'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.inner}>
          <Logo />
          <Navigation />
          <Phone />
          <CartProfileHeader />
        </div>
      </div>
    </header>
  )
}
