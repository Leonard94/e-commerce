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
  toggleProductModal: () => void
}

type TSize = {
  size_id: number
  size_name: string
  weight: string
  price: string
  fK_product_id: number
}
