import { useMemo } from 'react'

import { calculateSliderPosition, calculateWidth } from '@utils/switchLayout'

import { TSize } from '@type/product'

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
  const width = useMemo(() => calculateWidth(sizes.length), [sizes])

  if (sizes.length === 1) {
    return null
  }
  return (
    <ul className={styles.switch}>
      {sizes.map((size, index) => {
        return (
          <li key={index} style={{ width: width }}>
            <span onClick={() => setCurrentSize(index)}>{size.size_name}</span>
          </li>
        )
      })}
      <li
        className={styles.slider}
        style={{
          width: width,
          left: calculateSliderPosition(currentSize, sizes.length),
        }}
      />
    </ul>
  )
}
