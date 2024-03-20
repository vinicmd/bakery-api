import type { Response } from 'express'

export const badRequest = (response: Response, error: string) => {
  console.error(error)
  return response.sendStatus(400)
}

export const notFound = (response: Response) => {
  return response.sendStatus(404)
}

export const unauthorized = (response: Response, error: string) => {
  return response.sendStatus(401)
}
