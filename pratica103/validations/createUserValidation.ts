import * as Yup from 'yup'

export const createUserValidation = Yup.object().shape({
	name: Yup.string().min(4, 'Nome muito curto').max(25, 'Escolhe um nome menor').required('Nome é obrigatório'),
	email: Yup.string().email('Email inválido').required('Email é obrigatório'),
	password: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Senha é obrigatória')
})
