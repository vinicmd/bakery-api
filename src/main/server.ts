import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

import app from '../configs/app'
import { envConstants } from '../configs/env-constants'

dotenv.config()

mongoose
  .connect(envConstants.mongoUri)
  .then(() => {
    app.listen(envConstants.port, () => {
      console.log(`Server is running at port ${envConstants.port}`)
    })
  })
  .catch((error: unknown) => {
    console.error(error)
  })
