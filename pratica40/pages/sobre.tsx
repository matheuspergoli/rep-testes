import Head from 'next/head'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'
import SaberMais from '../components/SaberMais'

function Sobre() {
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Sobre</title>
			</Head>
			<main className='p-3'>
				<h1 className='text-4xl relative font-bold mb-5 after:content-[""] after:absolute after:block after:w-28 after:h-2 after:rounded-md after:bg-main-black'>
					Quem sou eu ?
				</h1>
				<section className='text-2xl max-w-7xl'>
					<p>
						Sou <span className='font-bold text-main-blue'>Matheus Pergoli</span>, tenho 23 anos, sou de SP - Capital e estudo{' '}
						<span className='font-bold text-main-blue'>Desenvolvimento Web</span>. No começo de tudo{' '}
						<span className='font-bold text-main-blue'>Python</span> foi meu primeiro contato com a linguagem de programação na plataforma do
						Curso em Vídeo. Foi lá onde tudo começou. Logo pulei para o <span className='font-bold text-main-blue'>HTML/CSS</span> e então
						descobri o que realmente gosto de fazer.
					</p>
					<p>
						Acho gratificante ver o resultado imediato de tudo o que faço. Com o tempo isso foi me trazendo mais desejo pelo conhecimento e
						descobertas sobre o gigantesco universo do <span className='font-bold text-main-blue'>Desenvolvimento Front-end</span>.
					</p>
					<p>
						Hoje, um de meus maiores prazeres é estudar sobre esse universo. A cada dia que passa minha vontade por estudar e conhecer mais desse
						mundo só aumenta. Por meio de dificuldades, erros, acertos, muita dedicação e carinho, meu desejo de construir uma{' '}
						<span className='font-bold text-main-blue'>Carreira</span> nessa área permanece imensurável.
					</p>
				</section>

				<SaberMais />
			</main>
		</AnimateFadeDiv>
	)
}

export default Sobre
