import type { Request, Response } from 'express'

import { dbGetIngredients } from '../../db/usecase/ingredient/db-get-ingredients'

export const listIngredients = async (req: Request, res: Response) => {
  try {
    const ingredients = await dbGetIngredients()
    return res.status(200).json(ingredients)
  } catch (error: unknown) {
    console.error(error)
  }
}
