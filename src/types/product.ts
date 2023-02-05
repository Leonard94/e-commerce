import { TError, TStatus } from './general'

export type TInitialState = {
  productsList: TCategory[]
  status: TStatus
  error: TError
  openProduct: null | TProduct
}

export type TCategory = {
  category_id: number
  category_code: string
  category_title: string
  items: TProduct[]
}

export type TProduct = {
  product_id: number
  category_title: string
  title: string
  composition: string
  sizes: TSize[]
  disabled: boolean
  preview_url: string
  openProductModal: (product_id: number) => void
}

export type TSize = {
  size_id: number
  size_name: string
  weight: string
  price: number
  img_url: null | string
  fk_product_id: number
}
