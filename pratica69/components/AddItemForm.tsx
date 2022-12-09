import React from 'react'
import { Formik, Field, Form } from 'formik'
import { database } from '../services/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ItemValidation } from '../validation/ItemValidation'

export const AddItemForm = () => {

	async function addItem(name: string, price: string) {
		try {
			const docRef = await addDoc(collection(database, 'products'), {
				name,
				price
			})
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	return (
		<Formik
			initialValues={{
				nome: '',
				preco: ''
			}}
			validationSchema={ItemValidation}
			onSubmit={(values, { resetForm }) => {
				addItem(values.nome, values.preco)
				resetForm()
			}}>
			{({ errors, touched }) => (
				<Form className='flex flex-col gap-5'>
					<div>
						<Field
							name='nome'
							type='text'
							placeholder='Nome'
							className='rounded-md border p-1 outline-none'
						/>
						{errors.nome && touched.nome ? <p className='text-red-500'>{errors.nome}</p> : null}
					</div>

					<div>
						<Field
							name='preco'
							type='number'
							placeholder='Preço'
							className='rounded-md border p-1 outline-none'
						/>
						{errors.preco && touched.preco ? <p className='text-red-500'>{errors.preco}</p> : null}
					</div>

					<button
						type='submit'
						className='w-fit rounded-md bg-green-500 px-3 py-2 text-white transition hover:bg-green-600'>
						Enviar
					</button>
				</Form>
			)}
		</Formik>
	)
}
