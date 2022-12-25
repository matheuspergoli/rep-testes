import * as Yup from 'yup'

export const createUserValidation = Yup.object().shape({
	firstName: Yup.string().required('Primeiro nome é obrigatório'),
	lastName: Yup.string().required('Sobrenome é obrigatório'),
	age: Yup.number().required('Idade é obrigatório').min(18, 'Você precisa ser maior de 18 anos')
})
