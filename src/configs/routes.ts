import { type Express, Router } from 'express'

import { login } from '../controllers/auth/login'
import { createUser } from '../controllers/user/create-user'

export const router = Router()

export default (app: Express): void => {
  const router = Router()

  router.get('/', (_req, res) => res.status(200).json({ message: 'alive' }))

  router.post('/user', createUser)

  router.post('/login', login)

  router.get('*', (_req, res) => res.sendStatus(404))

  app.use(router)
}
