import { ProductCard } from './ProductCard/ProductCard'

import styles from './styles.module.scss'

export const ProductsList = ({ productsList }: any) => {
  return (
    <>
      {productsList.map((category: any) => (
        <section key={category.category_id}className={styles.category}>
          <h2 className={styles.title}>{category.category_title}</h2>
          <div className={styles.row}>
            {category.items.map((product: any) => (
              <ProductCard key={product.product_id} {...product} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
