import * as Yup from 'yup'

export const CadastroSchema = Yup.object().shape({
	senha: Yup.string().min(6, 'Sua deve ter mais de 6 caracteres').required('Senha obrigatória'),
	email: Yup.string().email('Insira um email válido').required('Email obrigatório')
})
