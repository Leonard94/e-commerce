import { UserProfile } from '@components/UserProfile/UserProfile'
import { Logo } from './components/Logo/Logo'
import { Menu } from './components/Menu/Menu'
import { Phone } from './components/Phone/Phone'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.inner}>
            <Logo />
            <Phone />
            <UserProfile />
          </div>
        </div>
      </header>
      <div className={styles.menu}>
        <div className='container'>
          <Menu />
        </div>
      </div>
    </>
  )
}
