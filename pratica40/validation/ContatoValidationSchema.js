import * as Yup from 'yup'

const ContatoValidationSchema = Yup.object().shape({
	nome: Yup.string()
		.min(7, 'Preencha com seu nome verdadeiro para melhor contato')
		.max(20, 'Coloque apenas seu primeiro e segundo nome para um melhor contato')
		.required('Nome obrigatório'),
	email: Yup.string().email('Insira um email válido').required('Email obrigatório'),
	msg: Yup.string().min(20, 'Insira uma mensagem real').required('Mensagem obrigatória')
})

export default ContatoValidationSchema
