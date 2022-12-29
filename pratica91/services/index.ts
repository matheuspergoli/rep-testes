import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_API_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

interface Funcionario {
	id: number
	nome: string
	sobrenome: string
	cargo: string
	idade: number
}

export const getAllFuncionarios = async () => {
	const { data } = await supabase.from('funcionarios').select('*')
	return data as Funcionario[]
}

export const deleteFuncionario = async (id: number) => {
	const { data } = await supabase.from('funcionarios').delete().match({ id })
}
