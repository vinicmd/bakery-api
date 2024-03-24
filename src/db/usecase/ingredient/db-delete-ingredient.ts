import type { ObjectId, mongo } from 'mongoose'

import { Ingredient } from '../../models/Ingredient'

interface DeleteIngredient {
  id: string | ObjectId | mongo.ObjectId
}
export const dbDeleteIngredient = async ({ id }: DeleteIngredient) => {
  try {
    await Ingredient.findByIdAndDelete(id)
  } catch (error: unknown) {
    console.error(error)
  }
}
