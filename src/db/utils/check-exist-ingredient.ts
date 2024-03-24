import { Ingredient } from '../models/Ingredient'

export const checkIngredientExists = async (ingredientId: string) => {
  const ingredientExists = await Ingredient.exists({ _id: ingredientId })
  return !!ingredientExists
}
