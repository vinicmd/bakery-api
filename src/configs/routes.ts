import { type Express, Router } from 'express'

export const router = Router()

export default (app: Express): void => {
  const router = Router()

  router.get('/', (_req, res) => res.status(200).json({ message: 'alive' }))

  router.get('*', (_req, res) => res.sendStatus(404))

  app.use(router)
}
