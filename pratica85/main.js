const dotenv = require('dotenv')
const { connectToDatabase } = require('./src/database/connect')
dotenv.config()

// require('./modules/fs')
// require('./modules/path')
// require('./modules/http')

require('./modules/express')
connectToDatabase()
