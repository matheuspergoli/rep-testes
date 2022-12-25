require('dotenv').config()
require('./database/connect').connect()
require('./api/users')
