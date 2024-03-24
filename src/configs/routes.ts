import { type Express, Router } from 'express'

import { login } from '../controllers/auth/login'
import { createIngredient } from '../controllers/ingredient/create-ingredient'
import { deleteIngredient } from '../controllers/ingredient/delete-ingredient'
import { editIngredient } from '../controllers/ingredient/edit-ingredient'
import { listIngredients } from '../controllers/ingredient/list-ingredients'
import { createUser } from '../controllers/user/create-user'

export const router = Router()

export default (app: Express): void => {
  const router = Router()

  router.get('/', (_req, res) => res.status(200).json({ message: 'alive' }))

  router.post('/user', createUser)

  router.post('/login', login)

  router.get('/ingredient', listIngredients)

  router.post('/ingredient', createIngredient)

  router.put('/ingredient/:ingredientId', editIngredient)

  router.delete('/ingredient/:ingredientId', deleteIngredient)

  router.get('*', (_req, res) => res.sendStatus(404))

  app.use(router)
}
