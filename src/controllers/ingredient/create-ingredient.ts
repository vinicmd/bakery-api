import type { Request, Response } from 'express'

import { dbAddIngredient } from '../../db/usecase/ingredient/db-add-ingredient'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http'
import { isValidVolume } from '../../helpers/is-valid-volume'

interface RequiredFields {
  name: string
  volume: 'l' | 'g' | 'ml' | 'mg'
}

export const createIngredient = async (req: Request, res: Response) => {
  try {
    const requiredFields = ['name', 'volume']

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return badRequest(res, MissingParamError(field))
      }
    }

    const { name, volume }: RequiredFields = req.body

    if (!isValidVolume(volume)) {
      return badRequest(res, InvalidParamError('volume'))
    }

    const ingredient = await dbAddIngredient({
      name,
      volume
    })

    return res.status(201).json(ingredient)
  } catch (error: unknown) {
    console.error(error)
    res.sendStatus(500)
  }
}
