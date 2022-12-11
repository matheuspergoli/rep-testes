import React from 'react'
import Head from 'next/head'
import { supabase } from '../../services/supabase'
import { AddItemForm } from '../../components/AddItemForm'
import { getSession, signOut, useSession } from 'next-auth/react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		}
	}

	return {
		props: { user: session.user }
	}
}

interface User {
	name: string
	email: string
	image: string
}

interface Product {
	id: number
	name: string
	price: number
	description: string
}

function Home(props: { user: User }) {
	const { data: session } = useSession()
	const [products, setProducts] = React.useState<Product[] | null>(null)

	async function getProducts() {
		const { data, error } = await supabase.from('products').select('*')
		if (error) console.log(error)
		setProducts(data)
	}

	React.useEffect(() => {
		getProducts()
	}, [products])

	console.log('session', session)

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>
				<h1 className='mb-5 text-4xl font-bold'>Bem vindo, {props.user.name} !</h1>
				<h2 className='mb-10 text-2xl'>
					Você está logado com o email: <span className='font-semibold'>{props.user.email}</span>
				</h2>

				<button
					className='mb-10 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700'
					onClick={() => signOut({ callbackUrl: '/' })}>
					Sair
				</button>

				<AddItemForm />

				<h2 className='mt-10 mb-5 text-2xl font-bold'>Produtos</h2>
				{products ? (
					<ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{products.map((product) => (
							<li key={product.id} className='rounded bg-white p-4 shadow'>
								<h3 className='mb-2 text-xl font-bold'>{product.name}</h3>
								<p className='mb-2 text-lg font-semibold'>R$ {product.price}</p>
								<p className='mb-2'>{product.description}</p>
							</li>
						))}
					</ul>
				) : (
					<p className='mt-5 text-lg'>Carregando...</p>
				)}
			</main>
		</>
	)
}

export default Home
