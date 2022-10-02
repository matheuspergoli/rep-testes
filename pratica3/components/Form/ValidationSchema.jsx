import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Insira um email válido')
		.required('Email obrigatório'),
	password: Yup.string()
		.min(6, 'Insira uma senha válida')
		.required('Senha obrigatória')
})

export default ValidationSchema
