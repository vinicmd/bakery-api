import type { ObjectId, mongo } from 'mongoose'

export interface DbIngredient {
  name: string
  volume: 'l' | 'g' | 'ml' | 'mg'
  _id: string | ObjectId | mongo.ObjectId
}
