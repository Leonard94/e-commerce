export const getLowestPrice = (productSizes: any): string => {
  if (productSizes.length > 1) {
    const prices = productSizes.map((size: any) => size.price)
    return `от ${String(Math.min(...prices))} руб.`
  }
  return `${productSizes[0].price} руб.`
}
