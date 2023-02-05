import classNames from 'classnames'

import * as Icons from '@assets/icons/index'
import styles from './styles.module.scss'

type TProps = {
  title: string
  preview_url: string
  img_url: null | string
  category: string
  currentSize: number
}

export const ProductPhoto: React.FC<TProps> = ({
  title,
  preview_url,
  img_url,
  category,
  currentSize,
}) => {
  const imgClass = classNames(styles.img, {
    [styles.img_small]: currentSize === 0,
    [styles.img_medium]: currentSize === 1,
  })
  return (
    <div className={styles.photo}>
      {category === 'пицца' && (
        <>
          {currentSize !== 2 && (
            <i className={styles.border}>
              <Icons.BorderPizzaLarge className={styles.border_large} />
            </i>
          )}
          {currentSize === 0 && (
            <i className={styles.border}>
              <Icons.BorderPizzaMedium className={styles.border_medium} />
            </i>
          )}
        </>
      )}
      <img
        className={imgClass}
        src={`${process.env.REACT_APP_PRODUCT_URL}/${img_url || preview_url}`}
        alt={title}
      />
    </div>
  )
}
