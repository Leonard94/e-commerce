import { useNavigate, useParams } from 'react-router-dom'

import { TCategory, TProduct } from 'src/types/product'

import { Modal } from '@components/Modal/Modal'
import { ModalProduct } from '@components/ModalProduct/ModalProduct'
import { ProductCard } from './ProductCard/ProductCard'

import styles from './styles.module.scss'

type TProps = {
  productsList: TCategory[]
}

export const Products: React.FC<TProps> = ({ productsList }) => {
  const params = useParams()
  const navigate = useNavigate()

  const openProductModal = (productId: number) => {
    navigate(`/products/${productId}`)
  }

  const goBack = () => {
    navigate('/')
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
                openProductModal={openProductModal}
              />
            ))}
          </div>
        </section>
      ))}
      <Modal isOpen={Boolean(params.product_id)} onClose={goBack} type='center'>
        <ModalProduct />
      </Modal>
    </>
  )
}
