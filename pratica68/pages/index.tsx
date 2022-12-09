import React from 'react'
import Head from 'next/head'
import { FormLogin } from '../components/FormLogin'
import { FormSignUp } from '../components/FormSignUp'
import { MainContainer } from '../components/MainContainer'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const supabase = createServerSupabaseClient(context)

	const {
		data: { session }
	} = await supabase.auth.getSession()

	if (session) {
		return {
			redirect: {
				destination: '/profile',
				permanent: false
			}
		}
	}

	return {
		props: {
			name: 'John Doe'
		}
	}
}

function Home() {
	const [currentForm, setCurrentForm] = React.useState('login')

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<MainContainer>
				{currentForm === 'login' ? <FormLogin /> : <FormSignUp />}
				{currentForm === 'login' ? (
					<button onClick={() => setCurrentForm('signup')} className='mt-10 underline'>
						Não possui conta? Cadastre-se aqui.
					</button>
				) : (
					<button onClick={() => setCurrentForm('login')} className='mt-10 underline'>
						Já possui conta? Faça login aqui.
					</button>
				)}
			</MainContainer>
		</>
	)
}

export default Home
