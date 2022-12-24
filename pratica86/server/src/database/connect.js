import mongoose from 'mongoose'

export const connectToDatabase = () => {
	mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@nodejs-app.m6czhjl.mongodb.net/?retryWrites=true&w=majority`,
		(error) => {
			if (error) {
				return console.log('Erro ao conectar com o banco de dados')
			} else {
				return console.log('Conectado com o banco de dados')
			}
		}
	)
}
