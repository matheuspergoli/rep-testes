import dotenv from 'dotenv'
import { connectToDatabase } from './src/database/connect.js'
dotenv.config()

import './src/api/users.js'
connectToDatabase()
