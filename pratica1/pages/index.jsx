import Head from 'next/head'
import Form from '../components/Form'
import Heading from '../components/Heading'

function Home() {
	return (
		<main className='md:gap-5 md:mt-32 md:grid md:grid-cols-2 md: md:justify-items-center mx-auto w-full max-w-fit'>
			<Head>
				<title>Intro Component</title>
			</Head>
			<Heading />
			<Form />
		</main>
	)
}

export default Home
