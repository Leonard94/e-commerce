import { TCategory } from '@type/product'

export const findProductById = (productList: TCategory[], product_id: number) => {
  for (let i = 0; i < productList.length; i++) {
    for (let j = 0; j < productList[i].items.length; j++) {
      if (productList[i].items[j].product_id === product_id) {
        return productList[i].items[j]
      }
    }
  }
  return null
}
