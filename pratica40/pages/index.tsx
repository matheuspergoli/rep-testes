import Head from 'next/head'
import Link from 'next/link'
import AnimateScaleDiv from '../animation/AnimateScaleDiv'
import { BsArrowRightShort as ArrowIcon } from 'react-icons/bs'
import BackgroundAnimation from '../animation/BackgroundAnimation'

function Home() {
	return (
		<AnimateScaleDiv>
			<Head>
				<title>Home</title>
			</Head>
			<BackgroundAnimation />
			<main className='flex flex-col items-center justify-center gap-5 p-3 h-screen w-screen'>
				<h1 className='tracking-in-expand text-4xl text-center relative z-50 text-white'>
					Olá, Meu nome é <span className='font-bold text-main-blue'>Matheus Pergoli</span>
					<span className='block'>Eu sou um Desenvolvedor Web</span>
				</h1>
				<Link
					href='/sobre'
					className='slide-in-elliptic-top-fwd group text-2xl p-2 border-2 relative z-50 transition hover:border-main-blue hover:bg-main-blue text-white'>
					Conheça meu trabalho
					<ArrowIcon className='text-4xl font-bold inline-block group-hover:rotate-90 transition' />
				</Link>
			</main>
		</AnimateScaleDiv>
	)
}

export default Home
