import mongoose from 'mongoose'

export const connect = (url = process.env.MONGODB_URI as string) => {
	mongoose.connect(url, (error) => {
		if (error) {
			console.log('Error connecting to database: ', error)
		} else {
			console.log('Connected to database')
		}
	})
}
