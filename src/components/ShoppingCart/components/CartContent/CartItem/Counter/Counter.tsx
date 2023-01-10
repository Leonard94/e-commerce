import styles from './styles.module.scss'

type TProps = {
  count: number
}

export const Counter: React.FC<TProps> = ({ count }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.decrement}>-</button>
      <div className={styles.count}>{count}</div>
      <button className={styles.increment}>+</button>
    </div>
  )
}
