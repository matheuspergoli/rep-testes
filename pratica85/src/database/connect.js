const mongoose = require('mongoose')

const connectToDatabase = async () => {
	mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs-app.m6czhjl.mongodb.net/?retryWrites=true&w=majority`,
		(error) => {
			if (error) {
				return console.log('Erro ao conectar ao banco de dados')
			} else {
				return console.log('Conectado ao banco de dados')
			}
		}
	)
}

module.exports = {
	connectToDatabase
}
