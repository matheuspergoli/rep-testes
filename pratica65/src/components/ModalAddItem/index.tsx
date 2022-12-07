import React from 'react'
import { Formik, Field, Form } from 'formik'
import { supabase } from '../../services/supabase'
import { AddItemValidation } from '../../validation/AddItemValidation'

export const ModalAddItem = () => {
	const modalRef = React.useRef<HTMLDialogElement>(null)

	function showModal() {
		if (!modalRef.current?.hasAttribute('open')) {
			modalRef.current?.showModal()
		}
	}

	function closeModal() {
		modalRef.current?.close()
	}

	async function adicionarProduto(
		name: string,
		price: number,
		description: string
	) {
		const { data, error } = await supabase
			.from('products')
			.insert([{ name, price, description }])
	}

	return (
		<>
			<button
				onClick={showModal}
				className='rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600'>
				Adicionar produto
			</button>
			<dialog
				ref={modalRef}
				className='rounded-md p-5 backdrop:bg-black backdrop:bg-opacity-70'>
				<Formik
					initialValues={{
						name: '',
						price: '',
						description: ''
					}}
					validationSchema={AddItemValidation}
					onSubmit={async ({ name, price, description }) => {
						adicionarProduto(name, Number(price), description)
						closeModal()
					}}>
					{({ errors, touched, resetForm }) => (
						<Form className='flex flex-col gap-5'>
							<button
								type='button'
								onClick={() => {
									resetForm()
									closeModal()
								}}
								className='mb-5 ml-auto block h-7 w-7 rounded-full bg-red-500 font-bold text-white transition hover:bg-red-600'>
								X
							</button>
							<div>
								<Field
									name='name'
									placeholder='Nome do produto'
									className='rounded-md border p-2'
								/>
								{errors.name && touched.name ? (
									<div className='text-red-500'>{errors.name}</div>
								) : null}
							</div>
							<div>
								<Field
									type='number'
									name='price'
									placeholder='Preço do produto'
									className='rounded-md border p-2'
								/>
								{errors.price && touched.price ? (
									<div className='text-red-500'>{errors.price}</div>
								) : null}
							</div>
							<div>
								<Field
									name='description'
									placeholder='Descrição do produto'
									className='rounded-md border p-2'
								/>
								{errors.description && touched.description ? (
									<div className='text-red-500'>{errors.description}</div>
								) : null}
							</div>
							<button
								type='submit'
								className='rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600'>
								Adicionar produto
							</button>
						</Form>
					)}
				</Formik>
			</dialog>
		</>
	)
}
