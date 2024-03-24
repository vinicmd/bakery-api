import type { DbIngredient } from '../../../protocols/ingredient/db-ingredient'
import { Ingredient } from '../../models/Ingredient'

export const dbUpdateIngredient = async ({
  id,
  name,
  volume
}: DbIngredient) => {
  try {
    const ingredient = await Ingredient.findOneAndUpdate(
      { _id: id },
      { name, volume, updateAt: new Date(0) },
      {
        new: true
      }
    )
    return ingredient
  } catch (error: unknown) {
    console.error(error)
  }
}
