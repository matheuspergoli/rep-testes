import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	}
})

export const UserModel = mongoose.model('User', userSchema)
