import { useState, useEffect } from 'react'
import { TCategory } from 'src/types/product'

import { getAllProducts } from '../../services/api'

import { Banner } from './components/Banner/Banner'
import { Products } from './components/Products/Products'

export const HomePage = () => {
  const [products, setProducts] = useState<TCategory[]>([])
  const [status, setStatus] = useState('pending')

  useEffect(() => {
    getAllProducts()
      .then((resp) => setProducts(resp))
      .finally(() => setStatus('fulfilled'))
  }, [])

  return (
    <>
      <div className='container'>
        <Banner />
        <main>
          {status === 'pending' && <div>Skeleton</div>}
          {status === 'fulfilled' && <Products productsList={products} />}
        </main>
      </div>
    </>
  )
}
