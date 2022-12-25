const mongoose = require('mongoose')

const connect = () => {
	mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@nodejs-app.m6czhjl.mongodb.net/?retryWrites=true&w=majority`,
		(error) => {
			if (error) {
				console.log('Error connecting to MongoDB', error)
			} else {
				console.log('Connected to MongoDB')
			}
		}
	)
}

module.exports = {
	connect
}
