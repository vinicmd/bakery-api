import * as dotenv from 'dotenv'

import app from '../config/app'
import { envConstants } from '../config/env-constants'

dotenv.config()

app.listen(envConstants.port, () => {
  console.log(`Server is running at port ${envConstants.port}`)
})
