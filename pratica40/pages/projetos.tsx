import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import ProjetoModal from '../components/ProjetoModal'
import getAllProjects from '../service/getAllProjects'
import { Autocomplete, TextField } from '@mui/material'
import AnimateFadeDiv from '../animation/AnimateFadeDiv'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['projects'], getAllProjects)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 1
	}
}

const options = [
	{ label: 'Aluratube' },
	{ label: 'React Movies' },
	{ label: 'The Meal DB' },
	{ label: 'Pokenext' },
	{ label: 'Rick and Morty API' },
	{ label: 'DIO - Cadastro' },
	{ label: 'Countries API' },
	{ label: 'Portfolio freeCodeCamp' },
	{ label: 'Manage Landing Page' },
	{ label: 'Nexter' },
	{ label: 'Trillo' },
	{ label: 'Buscador CEP' },
	{ label: 'Snap Intro Section' },
	{ label: 'NFT Card React' },
	{ label: 'Summary Component React' },
	{ label: 'Huddle Landing Page' },
	{ label: 'Clipboard Landing Page' },
	{ label: 'Netflix Login' },
	{ label: 'Four Card Section' },
	{ label: 'Testimonials' },
	{ label: 'Desafio Rafa Ballerini' },
	{ label: 'Intro Component' },
	{ label: 'Selfcare' },
	{ label: 'Flexblog' },
	{ label: 'Advice Generator' },
	{ label: 'Social Proof Section' }
]

const animations = {
	initial: { opacity: 0 }
}

interface Projeto {
	id: string
	link: string
	nome: string
	repositorio: string
	tecnologias: string
	imagem: {
		url: string
	}
}

function Projetos() {
	const [inputValue, setInputValue] = React.useState('')
	const [projetoSelecionado, setProjetoSelecionado] = React.useState<Array<Projeto>>()
	const { data, status } = useQuery({ queryKey: ['projects'], queryFn: getAllProjects })

	React.useEffect(() => {
		const projetoAtual = data?.allProjetos.filter((projeto) => projeto.nome === inputValue)
		setProjetoSelecionado(projetoAtual)
	}, [inputValue, data?.allProjetos])

	if (status === 'loading') return <Title>Carregando projetos...</Title>
	return (
		<AnimateFadeDiv>
			<Head>
				<title>Projetos</title>
			</Head>
			<main className='p-3'>
				<Title>Projetos</Title>

				<Autocomplete
					disablePortal
					noOptionsText={'Nada encontrado'}
					inputValue={inputValue}
					onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
					options={options}
					sx={{ maxWidth: 350, margin: '50px auto 0 auto' }}
					renderInput={(params) => <TextField {...params} label='Procure por projetos' />}
				/>

				<div className='flex flex-wrap justify-evenly items-center gap-12 mt-12'>
					{projetoSelecionado
						? projetoSelecionado.map((projeto) => (
								<motion.div
									className='max-w-2xl max-h-2xl'
									variants={animations}
									initial='initial'
									transition={{ duration: 1 }}
									whileInView={{ opacity: 1 }}
									key={projeto.id}>
									<section>
										<h2
											className={`
										font-bold 
										text-2xl 
										relative
										after:content-[""]
										after:block
										after:absolute
										after:-top-1
										after:w-12
										after:h-2
										after:rounded-md
									after:bg-main-blue`}>
											{projeto.nome}
										</h2>
										<ProjetoModal
											nome={projeto.nome}
											link={projeto.link}
											rep={projeto.repositorio}
											tech={projeto.tecnologias}
											source={projeto.imagem.url}
										/>
									</section>
								</motion.div>
						  ))
						: null}
				</div>

				<div className='flex flex-wrap justify-evenly items-center gap-12 mt-12'>
					{data?.allProjetos.map((projeto) => (
						<motion.div
							className='max-w-2xl max-h-2xl'
							variants={animations}
							initial='initial'
							transition={{ duration: 1 }}
							whileInView={{ opacity: 1 }}
							key={projeto.id}>
							<section>
								<h2
									className={`
								font-bold 
								text-2xl 
								relative
								after:content-[""]
								after:block
								after:absolute
								after:-top-1
								after:w-12
								after:h-2
								after:rounded-md
								after:bg-main-blue`}>
									{projeto.nome}
								</h2>
								<ProjetoModal
									nome={projeto.nome}
									link={projeto.link}
									rep={projeto.repositorio}
									tech={projeto.tecnologias}
									source={projeto.imagem.url}
								/>
							</section>
						</motion.div>
					))}
				</div>
			</main>
		</AnimateFadeDiv>
	)
}

export default Projetos
