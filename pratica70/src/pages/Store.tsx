import React from 'react'
import { supabase } from '../services/supabase'
import { Container } from '../components/Container'
import { UserContext } from '../context/UserContext'
import { AddItemForm } from '../components/AddItemForm'

interface Product {
	id: number
	name: string
	price: number
	description: string
}

export const Store = () => {
	const { user, setUser } = React.useContext(UserContext)
	const [products, setProducts] = React.useState<Product[] | null>(null)

	async function signout() {
		const { error } = await supabase.auth.signOut()

		if (error) {
			console.log(error)
		} else {
			setUser(null)
		}
	}

	async function deleteProduct(id: number) {
		const { error } = await supabase.from('products').delete().match({ id })

		if (error) {
			console.log(error)
		} else {
			console.log('Deletado com sucesso')
		}
	}

	async function fetchProducts() {
		const { data, error } = await supabase.from('products').select('*')

		if (error) {
			console.log(error)
		} else {
			setProducts(data)
		}
	}

	React.useEffect(() => {
		fetchProducts()
	}, [products])

	return (
		<Container>
			<h1 className='mb-10 text-4xl font-bold'>Store</h1>
			<h2 className='mb-10 text-2xl font-semibold'>
				Bem vindo, {user?.user_metadata.name}!
			</h2>

			<AddItemForm />

			<button
				onClick={signout}
				className='mt-5 mb-10 w-40 rounded-md bg-red-500 px-3 py-2 text-center text-white transition hover:bg-red-600'>
				Deslogar
			</button>

			<section className='grid grid-cols-4 gap-5'>
				{products?.map((product) => (
					<div
						key={product.id}
						className='flex flex-col gap-5 rounded-md border border-gray-200 p-5'>
						<button
							onClick={() => deleteProduct(product.id)}
							className='h-10 w-10 rounded-md bg-red-500 text-white'>
							X
						</button>
						<h3 className='text-xl font-semibold'>{product.name}</h3>
						<p className='text-gray-500'>{product.description}</p>
						<p className='text-gray-500'>R$ {product.price}</p>
					</div>
				))}
			</section>
		</Container>
	)
}
