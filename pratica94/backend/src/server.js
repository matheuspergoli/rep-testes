import dotenv from 'dotenv'
import { app } from './app.js'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
	dbName: 'empresa'
})

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})
