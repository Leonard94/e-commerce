export const calculateWidth = (totalItems: number) => {
  return 100 / totalItems + '%'
}

export const calculateSliderPosition = (
  currentIndex: number,
  totalItems: number
) => {
  return (currentIndex / totalItems) * 100 + '%'
}
