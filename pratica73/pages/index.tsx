import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Formik, Form, Field } from 'formik'
import { addItemValidation } from '../validation/addItemValidation'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const supabase = createServerSupabaseClient(context)

	const {
		data: { session }
	} = await supabase.auth.getSession()

	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		}
	}

	return {
		props: {
			initialSession: session,
			user: session.user
		}
	}
}

interface Product {
	id: string
	name: string
	price: number
	description: string
	product_owner: string
}

function Home() {
	const [products, setProducts] = React.useState<Product[] | null>(null)
	const user = useUser()
	const router = useRouter()
	const supabaseClient = useSupabaseClient()

	async function addProduct(name: string, price: string, description: string) {
		const { data, error } = await supabaseClient.from('products').insert([
			{
				name,
				price,
				description,
				product_owner: user?.id
			}
		])

		if (error) {
			return
		}
	}

	async function deleteProduct(id: string) {
		const { data, error } = await supabaseClient.from('products').delete().match({ id })

		if (error) {
			return
		} else {
			getProducts()
		}
	}

	async function handleLogout() {
		const { error } = await supabaseClient.auth.signOut()

		if (error) {
			return
		}

		router.push('/login')
	}

	const getProducts = React.useCallback(async () => {
		const { data, error } = await supabaseClient.from('products').select('*').eq('product_owner', user?.id)

		if (error) {
			return
		} else {
			setProducts(data as Product[])
		}
	}, [supabaseClient, user?.id])

	React.useEffect(() => {
		getProducts()
	}, [getProducts])

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='mx-auto w-full max-w-7xl p-3'>
				<h1 className='mb-10 text-4xl font-bold'>NextJS App</h1>
				<h2 className='mb-10 text-2xl font-bold'>Welcome, {user?.email}</h2>
				<Formik
					initialValues={{
						name: '',
						price: '',
						description: ''
					}}
					validationSchema={addItemValidation}
					onSubmit={async (values, { setSubmitting, resetForm }) => {
						setSubmitting(true)
						await addProduct(values.name, values.price, values.description)
						getProducts()
						resetForm()
						setSubmitting(false)
					}}>
					{({ isSubmitting, errors, touched }) => (
						<Form className='mb-10'>
							<div className='mb-3'>
								<Field
									type='text'
									name='name'
									id='name'
									placeholder='Nome'
									className={`w-full rounded-md border p-2 ${
										touched.name && errors.name ? 'border-red-500' : 'border-gray-300'
									}`}
								/>
								{touched.name && errors.name ? <p className='text-sm text-red-500'>{errors.name}</p> : null}
							</div>
							<div className='mb-3'>
								<Field
									type='number'
									name='price'
									id='price'
									placeholder='Preço'
									className={`w-full rounded-md border p-2 ${
										touched.price && errors.price ? 'border-red-500' : 'border-gray-300'
									}`}
								/>
								{touched.price && errors.price ? (
									<p className='text-sm text-red-500'>{errors.price}</p>
								) : null}
							</div>
							<div className='mb-3'>
								<Field
									as='textarea'
									name='description'
									id='description'
									placeholder='Descrição'
									className={`w-full rounded-md border p-2 ${
										touched.description && errors.description ? 'border-red-500' : 'border-gray-300'
									}`}
								/>
								{touched.description && errors.description ? (
									<p className='text-sm text-red-500'>{errors.description}</p>
								) : null}
							</div>
							<button
								type='submit'
								className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
								disabled={isSubmitting}>
								{isSubmitting ? 'Loading...' : 'Add'}
							</button>
						</Form>
					)}
				</Formik>

				<h3 className='mb-10 text-2xl font-bold'>Products</h3>
				<section className='mb-10 grid grid-cols-4 gap-5'>
					{products?.map((product) => (
						<div key={product.id} className='rounded-md border p-2'>
							<button
								onClick={() => deleteProduct(product.id)}
								className='ml-auto block h-7 w-7 rounded-full bg-red-500 font-bold text-white'>
								X
							</button>
							<h4 className='mb-2 text-xl font-bold'>{product.name}</h4>
							<p className='mb-2'>{product.description}</p>
							<p className='mb-2'>R$ {product.price}</p>
						</div>
					))}
				</section>
				<button
					className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
					onClick={handleLogout}>
					Logout
				</button>
			</main>
		</>
	)
}

export default Home
