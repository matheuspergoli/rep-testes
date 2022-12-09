import * as Yup from 'yup'

export const ItemValidation = Yup.object().shape({
	nome: Yup.string().required('Nome é obrigatório'),
	preco: Yup.number().required('Preço é obrigatório')
})
