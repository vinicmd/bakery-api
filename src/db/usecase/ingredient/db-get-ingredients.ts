import { Ingredient } from '../../models/Ingredient'

export const dbGetIngredients = async () => {
  try {
    const ingredients = await Ingredient.find()
    return ingredients
  } catch (error: unknown) {
    console.error(error)
  }
}
