import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import { setOpenProduct } from '@store/productsSlice'

import { Button } from '@components/UI/Button/Button'
import { ProductPhoto } from './ProductPhoto/ProductPhoto'
import { SizeInfo } from './SizeInfo/SizeInfo'
import { SizeSwitch } from './SizeSwitch/SizeSwitch'

import styles from './styles.module.scss'
import { addProductToCart } from '@store/cartSlice'

type TProps = {
  product_id: number
}

export const ModalProduct: React.FC<TProps> = ({ product_id }) => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.products.openProduct)

  const [currentSize, setCurrentSize] = useState(0)

  const handleAddProductToCart = () => {
    dispatch(addProductToCart({ product, currentSize }))
  }

  useEffect(() => {
    dispatch(setOpenProduct(product_id))
  }, [product_id, dispatch])

  if (!product) {
    return null
  }
  return (
    <div className={styles.body}>
      <ProductPhoto title={product.title} preview_url={product.preview_url} />
      <div className={styles.product}>
        <div className={styles.info}>
          <div className={styles.title}>{product.title}</div>
          <SizeInfo size={product.sizes[currentSize]} />
          {product.composition && (
            <div className={styles.composition}>{product.composition}</div>
          )}
          <SizeSwitch
            sizes={product.sizes}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
          />
        </div>
        <Button
          type='button'
          view='primary'
          small
          onClick={handleAddProductToCart}
        >
          Добавить в корзину за {product.sizes[currentSize].price} руб.
        </Button>
      </div>
    </div>
  )
}
