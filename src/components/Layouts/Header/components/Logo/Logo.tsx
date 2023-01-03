import { Link } from 'react-router-dom'

import * as Icons from '@assets/icons/index'
import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <Link to='/' className={styles.logo}>
      <Icons.Logo />
    </Link>
  )
}
