import React from 'react'
import { supabase } from './services/supabase'
import { ModalAddItem } from './components/ModalAddItem'
import { MainContainer } from './components/MainContainer'
import { RemoveItem } from './components/RemoveItem'

interface Item {
	id: number
	name: string
	price: number
	description: string
}

type Items = Item[]

export const App = () => {
	const [items, setItems] = React.useState<Items | null>(null)

	async function getItems() {
		const { data, error } = await supabase.from('products').select('*')

		setItems(data)
	}

	React.useEffect(() => {
		getItems()
	}, [items])

	return (
		<MainContainer>
			<h1 className='mb-10 text-4xl font-bold'>Produtos</h1>
			<ModalAddItem />
			<section className='mt-10 grid grid-cols-4 gap-5'>
				{items?.map((item) => (
					<article
						key={item.id}
						className='flex flex-col gap-2 rounded-md border p-2'>
						<RemoveItem id={item.id} />
						<h2 className='text-2xl font-semibold'>Produto: {item.name}</h2>
						<p>{item.description}</p>
						<p className='text-xl'>R$ {item.price}</p>
					</article>
				))}
			</section>
		</MainContainer>
	)
}
