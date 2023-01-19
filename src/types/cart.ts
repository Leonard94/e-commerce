export type TProduct = {}

export type TInitialStateCart = {
  cartProductsList: TCartProduct[]
  cartTotal: number
  itemsQuantity: number
}

// Часть повторяется из TSize
export type TCartProduct = {
  product_id: number
  title: string
  composition: string
  category_title: string
  quantity: number
  totalPrice: number
  preview_url: string 
  size_id: number
  size_name: string 
  weight: string 
  price: number 
  fk_product_id: number
}
