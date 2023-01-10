import { z } from 'zod'

export const registerSchema = z.object({
	name: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.min(6, {
			message: 'Nome deve ter no mínimo 6 caracteres'
		})
		.trim(),
	email: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.email({
			message: 'Preencha com um endereço de email válido'
		})
		.trim(),
	password: z
		.string({
			required_error: 'Campo obrigatório'
		})
		.min(6, {
			message: 'Senha deve ter no mínimo 6 caracteres'
		})
		.trim()
})
