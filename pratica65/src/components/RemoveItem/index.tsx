import React from 'react'
import { supabase } from '../../services/supabase'

export const RemoveItem = (props: { id: number }) => {
	async function removeItem(id: number) {
		const { data, error } = await supabase
			.from('products')
			.delete()
			.match({ id })
	}

	return (
		<button
			onClick={() => removeItem(props.id)}
			className='ml-auto block h-7 w-7 rounded-full bg-red-500 font-bold text-white transition hover:bg-red-600'>
			X
		</button>
	)
}
