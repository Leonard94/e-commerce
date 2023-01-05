import { getLowestPrice } from '@utils/getLowestPrice'
import { TProduct } from 'src/types/product'

import ImgNotFound from '@assets/icons/img-not-found.svg'
import styles from './styles.module.scss'

export const ProductCard: React.FC<TProduct> = ({
  title,
  composition,
  sizes,
  preview_url,
  disabled,
}) => {
  const productImg = preview_url
    ? process.env.REACT_APP_PRODUCT_URL + '/' + preview_url
    : ImgNotFound

  return (
    <article className={styles.body}>
      <div className={styles.main}>
        <div className={styles.photo}>
          <img src={productImg} alt={title} />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.composition}>{composition}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{getLowestPrice(sizes)}</div>
        <button disabled={disabled}>
          {disabled ? 'Закончилось' : 'Выбрать'}
        </button>
      </div>
    </article>
  )
}
