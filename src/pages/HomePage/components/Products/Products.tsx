import { Modal } from '@components/Modal/Modal'
import { ModalProduct } from '@components/ModalProduct/ModalProduct'
import { useState } from 'react'

import { TCategory, TProduct } from 'src/types/product'

import { ProductCard } from './ProductCard/ProductCard'

import styles from './styles.module.scss'

type TProps = {
  productsList: TCategory[]
}

export const Products: React.FC<TProps> = ({ productsList }) => {
  const [isOpenProductModal, setOpenProductModal] = useState(false)

  const toggleProductModal = () => {
    setOpenProductModal(!isOpenProductModal)
  }

  return (
    <>
      {productsList.map((category: TCategory) => (
        <section key={category.category_id} className={styles.category}>
          <h2 className={styles.title}>{category.category_title}</h2>
          <div className={styles.row}>
            {category.items.map((product: TProduct) => (
              <ProductCard
                key={product.product_id}
                {...product}
                toggleProductModal={toggleProductModal}
              />
            ))}
          </div>
        </section>
      ))}
      <Modal
        type='center'
        isOpen={isOpenProductModal}
        onClose={toggleProductModal}
      >
        <ModalProduct />
      </Modal>
    </>
  )
}
