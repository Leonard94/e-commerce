import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import { fetchProducts } from '@store/productsSlice'

import { Banner } from './components/Banner/Banner'
import { Products } from './components/Products/Products'

export const HomePage = () => {
  const dispatch = useAppDispatch()

  const { productsList, status, error } = useAppSelector(
    (state) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <div className='container'>
        <Banner />
        <main>
          {status === 'pending' && <div>Skeleton</div>}
          {status === 'error' && <div>Error: {error}</div>}
          {status === 'fulfilled' && <Products productsList={productsList} />}
        </main>
      </div>
    </>
  )
}
