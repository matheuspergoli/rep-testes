import Head from 'next/head'
import Form from '../components/Form'
import Heading from '../components/Heading'

function Home() {
	return (
		<main className='m-32 mx-auto w-full max-w-fit grid grid-cols-2 justify-items-center'>
			<Head>
				<title>Intro Component</title>
			</Head>
			<Heading />
			<Form />
		</main>
	)
}

export default Home
