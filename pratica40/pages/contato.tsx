import React from 'react'
import Head from 'next/head'
import emailjs from '@emailjs/browser'
import Title from '../components/Title'
import { Formik, Form, Field } from 'formik'
import { SiYahoo as YahooImg } from 'react-icons/si'
import { ToastContainer, toast } from 'react-toastify'
import { AiFillGithub as GitImg } from 'react-icons/ai'
import { FaFacebookF as FaceImg } from 'react-icons/fa'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'
import { FaLinkedin as LinkedInImg } from 'react-icons/fa'
import { SiMicrosoftoutlook as OutlookImg } from 'react-icons/si'
import ContatoValidationSchema from '../validation/ContatoValidationSchema'

import 'react-toastify/dist/ReactToastify.css'

function Contato() {
	const [enviando, setEnviando] = React.useState(false)

	function enviarEmail(values: { nome: string; email: string; msg: string }) {
		const templateParams = {
			from_name: values.nome,
			message: values.msg,
			email: values.email
		}
		setEnviando(true)
		emailjs
			.send('service_g1xeump', 'template_8gmoiuu', templateParams, '5pOUpb3kg4-JOEzIV')
			.then((response) => {
				setEnviando(false)
				toast.success('Email enviado!', {
					autoClose: 3000
				})
			})
			.catch((error) => {
				toast.error('Occoreu algum problema, tente novamente!', {
					autoClose: 3000
				})
			})
	}

	return (
		<AnimateFadeDiv>
			<Head>
				<title>Contato</title>
			</Head>
			<main className='p-3'>
				<Title>Tem alguma questão ou gostaria de trabalhar junto?</Title>
				<Formik
					initialValues={{ nome: '', email: '', msg: '' }}
					validationSchema={ContatoValidationSchema}
					onSubmit={(values, { resetForm }) => {
						enviarEmail(values)
						resetForm()
					}}>
					{({ errors, touched }) => (
						<Form className='flex flex-col gap-5 max-w-lg p-5 mx-auto mb-8 bg-main-black'>
							<div>
								<Field id='nome' name='nome' type='text' placeholder='Nome' className='w-full p-1 outline-none text-xl bg-input text-white' />
								{errors.nome && touched.nome && <p className='text-red-500'>{errors.nome}</p>}
							</div>

							<div>
								<Field
									id='email'
									name='email'
									type='email'
									placeholder='Email'
									className='w-full p-1 outline-none text-xl bg-input text-white'
								/>
								{errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
							</div>

							<div>
								<Field
									as='textarea'
									id='msg'
									name='msg'
									placeholder='Digite sua mensagem'
									className='w-full p-1 outline-none text-xl bg-input text-white'
								/>
								{errors.msg && touched.msg && <p className='text-red-500'>{errors.msg}</p>}
							</div>

							<button
								type='submit'
								className='block w-fit text-xl py-1 px-5 ml-auto border-2 disabled:opacity-60 text-white'
								disabled={enviando}>
								{enviando ? 'Enviando...' : 'Enviar'}
							</button>
						</Form>
					)}
				</Formik>

				<Title>Outras formas de contato</Title>
				<section className='flex flex-wrap justify-center gap-5'>
					<a href='https://github.com/matheuspergoli' target='_blank' rel='noreferrer'>
						<figure className='group flex items-center justify-center text-5xl mx-auto w-32 h-24 clip-path hover:text-main-black text-white bg-main-blue'>
							<GitImg className='group-hover:scale-125 transition' />
						</figure>
					</a>
					<a href='https://www.facebook.com/matheus.pwal' target='_blank' rel='noreferrer'>
						<figure className='group flex items-center justify-center text-5xl mx-auto w-32 h-24 clip-path hover:text-main-black text-white bg-main-blue'>
							<FaceImg className='group-hover:scale-125 transition' />
						</figure>
					</a>
					<a href='mailto:heizwow@outlook.com' target='_blank' rel='noreferrer'>
						<figure className='group flex items-center justify-center text-5xl mx-auto w-32 h-24 clip-path hover:text-main-black text-white bg-main-blue'>
							<OutlookImg className='group-hover:scale-125 transition' />
						</figure>
					</a>
					<a href='mailto:matheus.pergoli2015@yahoo.com' target='_blank' rel='noreferrer'>
						<figure className='group flex items-center justify-center text-5xl mx-auto w-32 h-24 clip-path hover:text-main-black text-white bg-main-blue'>
							<YahooImg className='group-hover:scale-125 transition' />
						</figure>
					</a>
					<a href='https://www.linkedin.com/in/matheuspergoli/' target='_blank' rel='noreferrer'>
						<figure className='group flex items-center justify-center text-5xl mx-auto w-32 h-24 clip-path hover:text-main-black text-white bg-main-blue'>
							<LinkedInImg className='group-hover:scale-125 transition' />
						</figure>
					</a>
				</section>
			</main>
			<ToastContainer />
		</AnimateFadeDiv>
	)
}

export default Contato
