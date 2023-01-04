import { useState } from 'react'
import { ProductsList } from './ProductsList/ProductsList'

import styles from './styles.module.scss'

/*
  1. Получить все категории
*/

export const Products = ({ productsList }: any) => {
  const status = 'fulfilled'

  return (
    <div className='container'>
      <main style={{ margin: '50px 0px' }}>
        {!productsList.length && <div>Skeleton</div>}
        {productsList && <ProductsList productsList={productsList} />}
      </main>
    </div>
  )
}
