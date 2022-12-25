const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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

const UserModel = mongoose.model('users', userSchema)

module.exports = {
	UserModel
}
