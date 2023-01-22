import { TAuthMode } from '@type/user'

import text from './auth.constants'

import styles from './styles.module.scss'

type TProps = {
  mode: TAuthMode
  children: React.ReactNode
  changeMode: () => void
}

export const AuthLayout: React.FC<TProps> = ({
  mode,
  children,
  changeMode,
}) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <p className={styles.title}>{text[mode].title}</p>
        <p className={styles.subtitle}>{text[mode].subtitle}</p>
      </div>
      <div className={styles.children}>{children}</div>
      <div className={styles.extra} onClick={changeMode}>
        {text[mode].extraTitle}
        <span>{text[mode].extraBtn}</span>
      </div>
    </div>
  )
}
