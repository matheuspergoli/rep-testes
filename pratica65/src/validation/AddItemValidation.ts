import * as Yup from 'yup'

export const AddItemValidation = Yup.object().shape({
	name: Yup.string()
		.required('Nome é obrigatório')
		.min(5, 'Nome deve ter no mínimo 5 caracteres'),
	price: Yup.number()
		.required('Preço é obrigatório')
		.min(0, 'Preço deve ser maior que 0'),
	description: Yup.string().required('Descrição é obrigatório')
})
