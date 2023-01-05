import { TCategory, TProduct,  } from 'src/types/product'
import { ProductCard } from './ProductCard/ProductCard'

import styles from './styles.module.scss'

type TProps = {
  productsList: TCategory[]
}

export const Products: React.FC<TProps> = ({ productsList }) => {
  return (
    <>
      {productsList.map((category: TCategory) => (
        <section key={category.category_id} className={styles.category}>
          <h2 className={styles.title}>{category.category_title}</h2>
          <div className={styles.row}>
            {category.items.map((product: TProduct) => (
              <ProductCard key={product.product_id} {...product} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
