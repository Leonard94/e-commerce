import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage } from '@pages/HomePage/HomePage'
import { OrderPage } from '@pages/OrderPage/OrderPage'
import { Header } from '@components/Layouts/Header/Header'
import { Footer } from '@components/Layouts/Footer/Footer'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
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
