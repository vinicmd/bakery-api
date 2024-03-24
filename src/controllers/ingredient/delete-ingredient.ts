import type { Request, Response } from 'express'

import { dbDeleteIngredient } from '../../db/usecase/ingredient/db-delete-ingredient'
import { checkIngredientExists } from '../../db/utils/check-exist-ingredient'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http'

interface RequiredParams {
  ingredientId: string
}
export const deleteIngredient = async (
  req: Request<RequiredParams>,
  res: Response
) => {
  try {
    if (!req.params.ingredientId) {
      return badRequest(res, MissingParamError('ingredientId'))
    }

    const { ingredientId } = req.params

    const ingredientExists = await checkIngredientExists(ingredientId)

    if (!ingredientExists) {
      return badRequest(res, InvalidParamError('Ingredient not exist'))
    }

    await dbDeleteIngredient({ id: ingredientId })

    return res.sendStatus(200)
  } catch (error: unknown) {
    console.error(error)
  }
}
