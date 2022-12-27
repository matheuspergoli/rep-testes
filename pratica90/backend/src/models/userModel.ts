import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	profession: { type: String, required: true },
	age: { type: Number, required: true }
})

export const userModel = mongoose.model('User', userSchema)
