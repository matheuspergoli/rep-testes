import React from 'react'
import Title from './Title'
import Input from './Input'
import { useFormik } from 'formik'
import ValidationSchema from './ValidationSchema'
import Button from './Button'

function Form() {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		},
		validationSchema: ValidationSchema
	})

	return (
		<section className='flex flex-col gap-2 w-96'>
			<Title />
			<form
				className='flex flex-col gap-2 p-6 rounded-md bg-white'
				onSubmit={formik.handleSubmit}>
				<Input
					type='text'
					name='firstName'
					value={formik.values.firstName}
					onChange={formik.handleChange}
					placeholder='First Name'
				/>
				{formik.errors.firstName ? (
					<p className='text-right italic text-red-600'>
						{formik.errors.firstName}
					</p>
				) : null}
				<Input
					type='text'
					name='lastName'
					value={formik.values.lastName}
					onChange={formik.handleChange}
					placeholder='Last Name'
				/>
				{formik.errors.lastName ? (
					<p className='text-right italic text-red-600'>
						{formik.errors.lastName}
					</p>
				) : null}
				<Input
					type='text'
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					placeholder='Email Address'
				/>
				{formik.errors.email ? (
					<p className='text-right italic text-red-600'>
						{formik.errors.email}
					</p>
				) : null}
				<Input
					type='text'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					placeholder='Password'
				/>
				{formik.errors.password ? (
					<p className='text-right italic text-red-600'>
						{formik.errors.password}
					</p>
				) : null}
				<Button />
				<p className='text-xs text-center'>
					By clicking the button, you are agreeing to our{' '}
					<span className='text-red-600'>Terms and Services</span>
				</p>
			</form>
		</section>
	)
}

export default Form
