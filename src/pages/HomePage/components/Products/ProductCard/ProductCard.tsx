import { getLowestPrice } from '@utils/getLowestPrice'
import { TProduct } from '../../../../../types/product'

import { Button } from '@components/UI/Button/Button'

import ImgNotFound from '@assets/icons/not-found.svg'
import styles from './styles.module.scss'

export const ProductCard: React.FC<TProduct> = ({
  product_id,
  title,
  composition,
  sizes,
  preview_url,
  disabled,
  openProductModal,
}) => {
  const productImg = preview_url
    ? process.env.REACT_APP_PRODUCT_URL + '/' + preview_url
    : ImgNotFound

  return (
    <article
      className={styles.body}
      onClick={() => openProductModal(product_id)}
    >
      <div>
        <div className={styles.photo}>
          <img src={productImg} alt={title} />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.composition}>{composition}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{getLowestPrice(sizes)}</div>
        <Button type='button' view='primary' small disabled={disabled}>
          {disabled ? 'закончилось' : 'выбрать'}
        </Button>
      </div>
    </article>
  )
}
