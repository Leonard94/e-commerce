import { useState } from 'react'

import { Button } from '@components/UI/Button/Button'
import { Modal } from '@components/Modal/Modal'
import { CartContent } from './components/CartContent/CartContent'
import { ItemsNotFound } from './components/ItemsNotFound/ItemsNotFound'

import styles from './styles.module.scss'

const DATA = {
  items: [
    {
      product_id: 1,
      title: 'карбонара',
      composition:
        'Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы',
      disabled: false,
      category_title: 'пицца',
      preview_url: 'carbonara-preview.webp',
      size: {
        size_id: 1,
        size_name: 'маленькая',
        weight: '420 г',
        price: '489.00',
        fk_product_id: 1,
      },
    },
  ],
  total: '12323',
}

export const ShoppingCart = () => {
  // По нажатию (наведению?) появится popup со списком.
  const [isOpenModal, setOpenModal] = useState(false)
  const { items, total } = DATA

  return (
    <>
      <Button type='button' view='primary' onClick={() => setOpenModal(true)}>
        Корзина
        {items.length > 0 && <span> | {items.length}</span>}
      </Button>
      <Modal isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
        {items.length ? (
          <CartContent items={items} total={total} />
        ) : (
          <ItemsNotFound />
        )}
      </Modal>
    </>
  )
}
