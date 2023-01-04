import { Link } from 'react-router-dom'

import * as Icons from '@assets/icons/index'

export const Logo = () => {
  return (
    <Link to='/'>
      <Icons.Logo />
    </Link>
  )
}
