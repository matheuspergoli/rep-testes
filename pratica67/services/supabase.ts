import { createClient } from '@supabase/supabase-js'

interface Product {
	id: number
	name: string
	price: number
	description: string
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getAllProducts = async () => {
	const { data, error } = await supabase.from('products').select('*')
	if (error) {
		throw new Error(error.message)
	}
	return data as Product[]
}
