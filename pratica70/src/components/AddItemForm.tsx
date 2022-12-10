import React from 'react'
import { Formik, Form, Field } from 'formik'
import { supabase } from '../services/supabase'
import { AddItemValidation } from '../validation/AddItemValidation'

export const AddItemForm = () => {
	async function addItem(values: any) {
		const { data, error } = await supabase.from('products').insert([
			{
				name: values.name,
				price: values.price,
				description: values.description
			}
		])

		if (error) {
			console.log(error)
		} else {
			console.log(data)
		}
	}

	return (
		<Formik
			initialValues={{ name: '', price: '', description: '' }}
			validationSchema={AddItemValidation}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				addItem(values)
				setSubmitting(false)
				resetForm()
			}}>
			{({ isSubmitting, touched, errors }) => (
				<Form className='flex flex-col gap-5'>
					<div>
						<Field
							type='text'
							name='name'
							placeholder='Nome'
							className='rounded-md border p-1'
						/>
						{touched.name && errors.name ? (
							<p className='text-red-500'>{errors.name}</p>
						) : null}
					</div>
					<div>
						<Field
							type='number'
							name='price'
							placeholder='Preço'
							className='rounded-md border p-1'
						/>
						{touched.price && errors.price ? (
							<p className='text-red-500'>{errors.price}</p>
						) : null}
					</div>
					<div>
						<Field
							type='text'
							name='description'
							placeholder='Descrição'
							className='rounded-md border p-1'
						/>
						{touched.description && errors.description ? (
							<p className='text-red-500'>{errors.description}</p>
						) : null}
					</div>
					<button
						type='submit'
						disabled={isSubmitting}
						className='w-fit rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600 disabled:bg-opacity-50'>
						Adicionar
					</button>
				</Form>
			)}
		</Formik>
	)
}
