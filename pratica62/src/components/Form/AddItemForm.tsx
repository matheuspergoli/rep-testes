import React from 'react'
import { Formik, Field, Form } from 'formik'
import { supabase } from '../../services/supabase'
import { AddItemValidation } from '../../validation/AddItemValidation'

export const AddItemForm = () => {
	return (
		<Formik
			initialValues={{ name: '' }}
			validationSchema={AddItemValidation}
			onSubmit={async (values, { resetForm }) => {
				const { data, error } = await supabase
					.from('items')
					.insert([{ name: values.name }])
				resetForm()
			}}>
			{({ errors, touched }) => (
				<Form className='flex gap-2'>
					<div>
						<Field
							type='text'
							name='name'
							placeholder='Nome do produto'
							className='rounded-md p-1'
						/>
						{errors.name && touched.name ? (
							<p className='text-sm text-red-500'>{errors.name}</p>
						) : null}
					</div>
					<button
						type='submit'
						className='rounded-md bg-blue-500 px-3 py-1 text-white transition hover:bg-blue-600'>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}
