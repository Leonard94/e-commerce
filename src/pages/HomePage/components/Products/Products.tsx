import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { TCategory, TProduct } from 'src/types/product'

import { Modal } from '@components/Modal/Modal'
import { ProductDetail } from './ProductDetail/ProductDetail'
import { ProductCard } from './ProductCard/ProductCard'

import styles from './styles.module.scss'

type TProps = {
  productsList: TCategory[]
}

export const Products: React.FC<TProps> = ({ productsList }) => {
  const params = useParams()
  const navigate = useNavigate()
  const { hash } = useLocation()

  const openProductModal = (product_id: number) => {
    navigate(`/products/${product_id}`)
  }

  const goBack = () => {
    navigate('/')
  }

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) element.scrollIntoView()
    }
  }, [hash])

  return (
    <>
      {productsList.map((category: TCategory) => (
        <section
          key={category.category_id}
          className={styles.category}
          id={category.category_code}
        >
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
      {/* Проверять наличие такого id, иначе не открывать */}
      <Modal isOpen={Boolean(params.product_id)} onClose={goBack} type='center'>
        <ProductDetail product_id={Number(params.product_id)} goBack={goBack} />
      </Modal>
    </>
  )
}
