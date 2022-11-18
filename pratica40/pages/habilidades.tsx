import Head from 'next/head'
import Title from '../components/Title'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Habilidades() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Habilidades</title>
			</Head>
			<main className='p-3'>
				<Title>Habilidades</Title>
			</main>
		</AnimateFadeDiv>
	)
}

export default Habilidades
