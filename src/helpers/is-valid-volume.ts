export const isValidVolume = (volume: string) => {
  let isValid = false
  const ingredientType = ['g', 'kg', 'ml', 'l']

  for (const type of ingredientType) {
    if (volume === type) {
      isValid = true
    }
  }

  return isValid
}
