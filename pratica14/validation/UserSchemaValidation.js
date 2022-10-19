import * as Yup from 'yup'

const UserSchemaValidation = Yup.object().shape({
	email: Yup.string()
		.email('Insira uma email válido')
		.required('Email obrigatório'),
	password: Yup.string()
		.min('Senha deve ter mais de 6 caracteres')
		.required('Senha obrigatória')
})

export default UserSchemaValidation
