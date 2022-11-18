import Head from 'next/head'
import Title from '../components/Title'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Contato() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Contato</title>
			</Head>
			<main className='p-3'>
				<Title>Contato</Title>
			</main>
		</AnimateFadeDiv>
	)
}

export default Contato
