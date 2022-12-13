import * as Yup from 'yup'

export const addItemValidation = Yup.object().shape({
	name: Yup.string().required('Nome é obrigatorio').min(3, 'Nome deve ter no minimo 3 caracteres'),
	price: Yup.number().required('Preço é obrigatorio').min(0, 'Preço deve ser maior que 0'),
	description: Yup.string()
		.required('Descrição é obrigatorio')
		.min(3, 'Descrição deve ter no minimo 3 caracteres')
})
