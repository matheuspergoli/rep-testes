import Head from 'next/head'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Contato() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Contato</title>
			</Head>
			<main className='p-3'>
				<h1 className='text-4xl font-bold mb-5'>Contato</h1>
			</main>
		</AnimateFadeDiv>
	)
}

export default Contato
