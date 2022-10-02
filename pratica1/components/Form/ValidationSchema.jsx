import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(5, 'First name must contain more than 5 characters')
		.max(15, 'Name must be less than 15 characters')
		.required('First Name cannot be empty'),
	lastName: Yup.string()
		.min(5, 'Last name must contain more than 5 characters')
		.max(15, 'Name must be less than 15 characters')
		.required('Last Name cannot be empty'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Looks like this is not an email'),
	password: Yup.string()
		.min(6, 'Weak password')
		.required('Password cannot be empty')
})

export default ValidationSchema
