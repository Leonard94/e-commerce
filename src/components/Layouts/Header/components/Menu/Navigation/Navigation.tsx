import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import styles from './styles.module.scss'

export const Navigation = () => {
  const linkClass = ({ isActive }: any) =>
    cn(styles.link, { [styles.link_active]: isActive })

  return (
    <nav>
      <ul className={styles.menu_list}>
        <li>
          <NavLink to='/#pizza' className={styles.link}>
            Пицца
          </NavLink>
        </li>
        <li>
          <NavLink to='/#drink' className={styles.link}>
            Напитки
          </NavLink>
        </li>
        <li>
          <NavLink to='#sauce' className={styles.link}>
            Соусы
          </NavLink>
        </li>
        <li>
          <NavLink to='promo' className={linkClass}>
            Акции
          </NavLink>
        </li>
        <li>
          <NavLink to='contacts' className={linkClass}>
            Контакты
          </NavLink>
        </li>
        <li>
          <NavLink to='about' className={linkClass}>
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
