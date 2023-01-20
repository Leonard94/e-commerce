import { useState } from 'react'

import { useAppSelector } from '@store/hooks'

import { Button } from '@components/UI/Button/Button'
import { Modal } from '@components/Modal/Modal'
import { CartContent } from './components/CartContent/CartContent'
import { ItemsNotFound } from './components/ItemsNotFound/ItemsNotFound'

export const ShoppingCart = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  const { itemsQuantity } = useAppSelector((state) => state.cart)

  return (
    <>
      <Button type='button' view='primary' onClick={() => setOpenModal(true)}>
        Корзина
        {itemsQuantity > 0 && <span> | {itemsQuantity}</span>}
      </Button>
      <Modal
        type='drawer'
        isOpen={isOpenModal}
        onClose={() => setOpenModal(false)}
      >
        {itemsQuantity === 0 ? <ItemsNotFound /> : <CartContent />}
      </Modal>
    </>
  )
}
