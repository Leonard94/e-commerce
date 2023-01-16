import { Routes, Route } from 'react-router-dom'

import { Header } from '@components/Layouts/Header/Header'
import { HomePage } from '@pages/HomePage/HomePage'
import { OrderPage } from '@pages/OrderPage/OrderPage'
import { Footer } from '@components/Layouts/Footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:product_id' element={<HomePage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/promo' element={<h1>Акции</h1>} />
        <Route path='/contacts' element={<h1>Контакты</h1>} />
        <Route path='/about' element={<h1>О нас</h1>} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}
