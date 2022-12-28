import React from 'react'
import Head from 'next/head'
import { deleteFuncionario } from '../service/deleteFuncionario'
import { createFuncionario } from '../service/createFuncionario'
import { getAllFuncionarios } from '../service/getAllFuncionarios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { QueryClient, useQuery, useMutation, useQueryClient, dehydrate } from 'react-query'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('funcionarios', getAllFuncionarios)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

interface Funcionario {
	id: number
	nome: string
	sobrenome: string
	profissao: string
	idade: number
}

function Home() {
	const [funcionario, setFuncionario] = React.useState({
		nome: '',
		sobrenome: '',
		profissao: '',
		idade: 0
	})
	const queryClient = useQueryClient()
	const { data } = useQuery<Funcionario[]>({ queryKey: 'funcionarios', queryFn: getAllFuncionarios })

	const createUserMutation = useMutation(createFuncionario, {
		onSuccess: () => {
			queryClient.invalidateQueries('funcionarios')
		}
	})

	const deleteUserMutation = useMutation(deleteFuncionario, {
		onSuccess: () => {
			queryClient.invalidateQueries('funcionarios')
		}
	})

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto p-3'>
				<section className='mt-10'>
					<h1 className='mb-5 text-xl font-bold'>Cadastrar Funcionário</h1>
					<form className='flex flex-col gap-5' onSubmit={(e) => e.preventDefault()}>
						<div className='flex flex-col gap-2'>
							<label htmlFor='nome'>Nome</label>
							<input
								type='text'
								id='nome'
								className='rounded-md border p-3'
								value={funcionario.nome}
								onChange={(e) => setFuncionario({ ...funcionario, nome: e.target.value })}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='sobrenome'>Sobrenome</label>
							<input
								type='text'
								id='sobrenome'
								className='rounded-md border p-3'
								value={funcionario.sobrenome}
								onChange={(e) => setFuncionario({ ...funcionario, sobrenome: e.target.value })}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='profissao'>Profissão</label>
							<input
								type='text'
								id='profissao'
								className='rounded-md border p-3'
								value={funcionario.profissao}
								onChange={(e) => setFuncionario({ ...funcionario, profissao: e.target.value })}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label htmlFor='idade'>Idade</label>
							<input
								type='number'
								id='idade'
								className='rounded-md border p-3'
								value={funcionario.idade}
								onChange={(e) => setFuncionario({ ...funcionario, idade: Number(e.target.value) })}
							/>
						</div>
						<button
							onClick={() => {
								createUserMutation.mutate(funcionario)
								setFuncionario({
									nome: '',
									sobrenome: '',
									profissao: '',
									idade: 0
								})
							}}
							className='rounded-md bg-blue-500 p-2 text-white'>
							Cadastrar
						</button>
					</form>
				</section>

				<section className='mt-10'>
					<h1 className='mb-5 text-xl font-bold'>Funcionários</h1>
					<ul className='flex flex-col gap-5'>
						{data?.map((funcionario) => (
							<li key={funcionario.id} className='flex flex-col gap-2 rounded-md border p-2'>
								<button
									onClick={() => deleteUserMutation.mutate(funcionario.id)}
									className='w-fit rounded-md bg-red-500 p-1 text-white'>
									Deletar
								</button>
								{funcionario.nome} {funcionario.sobrenome} - {funcionario.profissao} - {funcionario.idade}
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	)
}

export default Home
