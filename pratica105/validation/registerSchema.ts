import { z } from 'zod'

export const registerSchema = z.object({
	name: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.min(5, 'Nome precisa ter no mínimo 5 caracteres')
		.trim(),
	email: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.email('Email precisa ter um endereço válido'),
	password: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.min(6, 'Senha deve ter no mínimo 6 caracteres')
})
