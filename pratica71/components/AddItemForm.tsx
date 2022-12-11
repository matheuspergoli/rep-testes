import React from 'react'
import { Formik, Form, Field } from 'formik'
import { supabase } from '../services/supabase'
import { AddItemValidation } from '../validation/AddItemValidation'

interface Values {
	name: string
	price: string
	description: string
}

export const AddItemForm = () => {
	async function addItem(values: Values) {
		const { data, error } = await supabase.from('products').insert([
			{
				name: values.name,
				price: values.price,
				description: values.description
			}
		])
		if (error) console.log(error)
		console.log(data)
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
					<div className='flex flex-col'>
						<Field type='text' name='name' placeholder='Nome' className='w-40 rounded-md border p-1' />
						{touched.name && errors.name ? <p className='text-red-500'>{errors.name}</p> : null}
					</div>
					<div className='flex flex-col'>
						<Field type='number' name='price' placeholder='Preço' className='w-40 rounded-md border p-1' />
						{touched.price && errors.price ? <p className='text-red-500'>{errors.price}</p> : null}
					</div>
					<div className='flex flex-col'>
						<Field
							type='text'
							name='description'
							placeholder='Descrição'
							className='w-40 rounded-md border p-1'
						/>
						{touched.description && errors.description ? (
							<p className='text-red-500'>{errors.description}</p>
						) : null}
					</div>

					<button
						className='w-fit rounded-md bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700 disabled:bg-opacity-50'
						type='submit'
						disabled={isSubmitting}>
						Adicionar
					</button>
				</Form>
			)}
		</Formik>
	)
}
