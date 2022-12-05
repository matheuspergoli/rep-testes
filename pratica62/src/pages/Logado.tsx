import React from 'react'
import { UserAuth } from '../context/UserAuth'
import { supabase } from '../services/supabase'
import { AddItemForm } from '../components/Form'

interface Item {
	id: number
	name: string
}

type Items = Item[]

export const Logado = () => {
	const [items, setItems] = React.useState<Items>()
	const { user, deslogarUser } = React.useContext(UserAuth)

	async function getItems() {
		const { data, error } = await supabase.from('items').select('*')
		setItems(data as Items)
	}

	React.useEffect(() => {
		getItems()
	}, [items])

	return (
		<section>
			<h1 className='text-2xl font-semibold text-white'>
				Usuário Logado: {user?.email}
			</h1>
			<AddItemForm />
			<ul className='mt-4'>
				{items?.map((item) => (
					<li key={item.id} className='text-white'>
						<strong>Item</strong>: {item.name}
					</li>
				))}
			</ul>
			<button
				className='mt-4 rounded bg-red-500 px-4 py-2 text-white'
				onClick={deslogarUser}>
				Deslogar
			</button>
		</section>
	)
}
