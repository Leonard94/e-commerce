import { Button } from '@components/UI/Button/Button'

export const ShoppingCart = () => {
  // По нажатию (наведению?) появится popup со списком.

  const items = 2
  return (
    <Button type='button' view='primary'>
      Корзина
      {items && <span> | {items}</span>}
    </Button>
  )
}
