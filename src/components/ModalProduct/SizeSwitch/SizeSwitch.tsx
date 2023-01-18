import { TSize } from '../../../types/product'

import styles from './styles.module.scss'

type TProps = {
  sizes: TSize[]
  currentSize: number
  setCurrentSize: (size: number) => void
}

export const SizeSwitch: React.FC<TProps> = ({
  sizes,
  currentSize,
  setCurrentSize,
}) => {
  if (sizes.length === 1) {
    return null
  }
  return (
    <div className={styles.switch}>
      {sizes.map((size, index) => {
        const className = index === currentSize ? styles.active : ''
        return (
          <span
            key={index}
            className={className}
            onClick={() => setCurrentSize(index)}
          >
            {size.size_name}, {size.weight}
          </span>
        )
      })}
    </div>
  )
}
