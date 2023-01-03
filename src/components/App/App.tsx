import { Routes, Route } from 'react-router-dom'

import { Header } from '@components/Layouts/Header/Header' 
import { HomePage } from '@pages/HomePage/HomePage'
import { OrderPage } from '@pages/OrderPage/OrderPage'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}
