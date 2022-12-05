import * as Yup from 'yup'

export const RegisterValidation = Yup.object().shape({
	email: Yup.string().email('Email inválido').required('Email é obrigatório'),
	password: Yup.string().required('Senha é obrigatório'),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais')
		.required('Confirmação de senha é obrigatório')
})
