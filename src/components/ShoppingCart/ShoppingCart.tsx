import { useState } from 'react'

import { useAppSelector } from '@store/hooks'

import { Button } from '@components/UI/Button/Button'
import { Modal } from '@components/Modal/Modal'
import { CartContent } from './components/CartContent/CartContent'
import { CartIsEmpty } from './components/CartIsEmpty/CartIsEmpty'

export const ShoppingCart = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  const { itemsQuantity } = useAppSelector((state) => state.cart)

  const toggleShoppingCart = () => {
    setOpenModal(!isOpenModal)
  }

  return (
    <>
      <Button
        type='button'
        view='primary'
        small
        onClick={toggleShoppingCart}
      >
        Корзина
        {itemsQuantity > 0 && <span> | {itemsQuantity}</span>}
      </Button>
      <Modal
        type='drawer'
        isOpen={isOpenModal}
        onClose={toggleShoppingCart}
      >
        {itemsQuantity === 0 ? <CartIsEmpty /> : <CartContent closeShoppingCart={toggleShoppingCart}/>}
      </Modal>
    </>
  )
}
