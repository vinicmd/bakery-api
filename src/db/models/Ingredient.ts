import { Date, Schema, model } from 'mongoose'

export const Ingredient = model(
  'Ingredient',
  new Schema(
    {
      name: {
        type: String,
        required: true
      },
      volume: {
        type: String,
        required: true,
        enum: ['g', 'mg', 'ml', 'l']
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
    },
    { timestamps: { updatedAt: true } }
  )
)
