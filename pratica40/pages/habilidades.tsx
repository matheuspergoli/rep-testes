import Head from 'next/head'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Habilidades() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Habilidades</title>
			</Head>
			<main className='p-3'>
				<h1 className='text-4xl font-bold mb-5'>Habilidades</h1>
			</main>
		</AnimateFadeDiv>
	)
}

export default Habilidades
