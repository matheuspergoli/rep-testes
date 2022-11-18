import Head from 'next/head'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'

function Projetos() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Projetos</title>
			</Head>
			<main className='p-3'>
				<h1 className={`
				text-4xl 
				font-bold 
				mb-5
				mx-auto 
				w-fit
				after:content-[""]
				after:block
				after:w-1/2
				after:h-2
				after:mx-auto
				after:mt-2
				after:rounded-md
				after:bg-main-black`}>Projetos</h1>
			</main>
		</AnimateFadeDiv>
	)
}

export default Projetos
