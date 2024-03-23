import { Ingredient } from '../../models/Ingredient'

interface AddIngredientI {
  name: string
  volume: 'l' | 'g' | 'ml' | 'mg'
}

export const dbAddIngredient = async ({ name, volume }: AddIngredientI) => {
  try {
    const ingredient = await Ingredient.create({ name, volume })
    return ingredient
  } catch (error: unknown) {
    console.error(error)
  }
}
