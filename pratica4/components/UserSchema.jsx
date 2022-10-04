import * as Yup from 'yup'

const UserSchema = Yup.object().shape({
	firstName: Yup.string().required(),
	lastName: Yup.string().required(),
	email: Yup.string().email().required()
})

export default UserSchema
