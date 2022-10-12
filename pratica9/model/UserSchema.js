import * as Yup from 'yup'

const UserSchema = Yup.object().shape({
	email: Yup.string()
		.email('Insira um email válido')
		.required('Email obrigatório'),
	senha: Yup.string()
		.min(6, 'A senha deve ter no mínimo 6 caracteres')
		.required('Senha obrigatória')
})

export default UserSchema
