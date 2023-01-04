import { getLowestPrice } from '@utils/getLowestPrice'

import styles from './styles.module.scss'

export const ProductCard = ({ title, composition, sizes }: any) => {
  return (
    <article className={styles.body}>
      <div className={styles.main}>
        <div className={styles.photo}>
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Products/ee610848581545c298a429c05802f56d_292x292.webp'
            alt=''
          />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.composition}>{composition}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>{getLowestPrice(sizes)}</div>
        <button>Выбрать</button>
      </div>
    </article>
  )
}
