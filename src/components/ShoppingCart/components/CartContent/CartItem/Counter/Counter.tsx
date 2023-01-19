import styles from './styles.module.scss'

type TProps = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export const Counter: React.FC<TProps> = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className={styles.counter}>
      <button
        className={styles.decrement}
        onClick={decrementQuantity}
        disabled={quantity === 1}
      >
        -
      </button>
      <div className={styles.count}>{quantity}</div>
      <button className={styles.increment} onClick={incrementQuantity}>
        +
      </button>
    </div>
  )
}
