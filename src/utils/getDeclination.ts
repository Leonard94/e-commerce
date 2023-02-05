type units = 'products'

export const getDeclination = (number: number, units: units) => {
  const data = {
    products: ['товар', 'товара', 'товаров'],
  }

  number = Math.abs(number) % 100
  const number1 = number % 10

  if (number > 10 && number < 20) {
    return `${number} ${data[units][2]}`
  }
  if (number1 > 1 && number1 < 5) {
    return `${number} ${data[units][1]}`
  }
  if (number1 === 1) {
    return `${number} ${data[units][0]}`
  }
  return `${number} ${data[units][2]}`
}
