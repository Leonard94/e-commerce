import { TSize } from '@type/product'

import styles from './styles.module.scss'

type TProps = {
  size: TSize
}

export const SizeInfo: React.FC<TProps> = ({ size }) => {
  return (
    <div className={styles.size}>
      {size.size_name}
      {size.weight && `, ${size.weight}`}
    </div>
  )
}
