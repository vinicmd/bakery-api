import * as dotenv from 'dotenv'

import app from '../configs/app'
import { envConstants } from '../configs/env-constants'

dotenv.config()

app.listen(envConstants.port, () => {
  console.log(`Server is running at port ${envConstants.port}`)
})
