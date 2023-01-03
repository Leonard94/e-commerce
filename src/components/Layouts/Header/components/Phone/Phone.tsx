import styles from './styles.module.scss'

export const Phone = () => {
  return (
    <div className={styles.phone}>
      <a href='tel:6789' className={styles.phone_number}>
        6789
      </a>
      <span className={styles.phone_description}>Звонок бесплатный</span>
    </div>
  )
}
