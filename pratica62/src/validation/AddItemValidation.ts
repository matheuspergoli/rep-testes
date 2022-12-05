import * as Yup from 'yup'

export const AddItemValidation = Yup.object().shape({
	name: Yup.string()
		.required('Nome é obrigatório')
		.min(5, 'O nome deve ter no mínimo 5 caracteres')
})
