import type { Request, Response } from 'express'

import { dbUpdateIngredient } from '../../db/usecase/ingredient/db-update-ingredient'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http'

interface RequiredParams {
  ingredientId: string
}

interface RequiredBody {
  name?: string
  volume?: 'l' | 'g' | 'ml' | 'mg'
}

export const editIngredient = async (
  req: Request<RequiredParams>,
  res: Response
) => {
  try {
    if (!req.params.ingredientId) {
      return badRequest(res, MissingParamError('ingredientId'))
    }

    const { ingredientId } = req.params

    const { name, volume }: RequiredBody = req.body

    if (!name && !volume) {
      return badRequest(res, MissingParamError('name and volume'))
    }

    const ingredient = await dbUpdateIngredient({
      id: ingredientId,
      name,
      volume
    })

    console.log(ingredient)

    return res.json(ingredient).status(201)
  } catch (error: unknown) {
    console.error(error)
  }
}
