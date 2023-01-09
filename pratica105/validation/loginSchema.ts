import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.email('Email precisa ter um endereço válido'),
	password: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.min(6, 'Campo inválido')
})
