import * as Yup from 'yup'

export const UserValidation = Yup.object().shape({
	email: Yup.string().email('Email inválido').required('Email é obrigatório'),
	password: Yup.string().required('Senha é obrigatório')
})
