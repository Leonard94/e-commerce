export const isExists = (value: string) => {
  return !!value
}

export const hasRequiredSize = (value: string, min: number, max: number) => {
  return value.length >= min && value.length <= max
}

export const hasCapitalAndDigit = (value: string) => {
  return value.search(/[A-Z]/g) >= 0 && value.search(/\d/gi) >= 0
}

export const hasValuesMatch = (value1: string, value2: string) => {
  return value1 === value2
}

export const hasEmailCorrectFormat = (value: string) => {
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return regex.test(value.toLowerCase())
}
