import Head from 'next/head'
import Title from '../components/Title'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Projetos() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Projetos</title>
			</Head>
			<main className='p-3'>
				<Title>Projetos</Title>
			</main>
		</AnimateFadeDiv>
	)
}

export default Projetos
