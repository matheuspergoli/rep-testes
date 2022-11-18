import Head from 'next/head'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Projetos() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Projetos</title>
			</Head>
			<main className='p-3'>
				<h1 className='text-4xl font-bold mb-5'>Projetos</h1>
			</main>
		</AnimateFadeDiv>
	)
}

export default Projetos
