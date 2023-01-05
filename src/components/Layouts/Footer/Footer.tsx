import * as Icons from '@assets/icons/index'

import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.phone}>
            <div className={styles.phone_number}>
              <a href='https://t.me/Koleda_Vladislav'>6789</a>
              <span>Звонок бесплатный</span>
            </div>
            <div className={styles.phone_info}>
              Заказы принимаем с 10:00 до 23:00
            </div>
          </div>
          <div className={styles.logo}>
            <Icons.LogoLight />
          </div>
          <ul className={styles.info}>
            <li>Политика конфиденциальности</li>
            <li>Пользовательское соглашение</li>
            <li>Юридическая информация</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
