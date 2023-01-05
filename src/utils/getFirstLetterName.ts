export const getFirstLetterName = (
  name: string | null,
  surname: string | null
): string => {
  if (name && surname) {
    return name[0].toUpperCase() + surname[0].toUpperCase()
  } else if (name) {
    return name[0].toUpperCase()
  } else if (surname) {
    return surname[0].toUpperCase()
  }
  return 'DD'
}
