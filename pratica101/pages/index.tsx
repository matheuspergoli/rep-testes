import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getFuncionarios, createFuncionarios, deleteFuncionarios } from '../service'
import { QueryClient, useQuery, useQueryClient, useMutation, dehydrate } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('funcionarios', getFuncionarios)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

interface Funcionario {
	id: string
	nome: string
	sobrenome: string
	cargo: string
	salario: number
	idade: number
}

function Home() {
	const queryClient = useQueryClient()
	const firstInputRef = React.useRef<HTMLInputElement>(null)
	const [funcionario, setFuncionario] = React.useState({} as Funcionario)
	const { data } = useQuery<Funcionario[]>({ queryKey: 'funcionarios', queryFn: getFuncionarios })

	const createFuncionarioMutation = useMutation(createFuncionarios, {
		onSuccess: () => {
			queryClient.invalidateQueries('funcionarios')
		}
	})

	const deleteFuncionarioMutation = useMutation(deleteFuncionarios, {
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
				<h1 className='mb-10 text-2xl font-bold'>NextJS App</h1>
				<form
					className='mb-10 flex flex-col gap-5'
					onSubmit={(e) => {
						e.preventDefault()
						createFuncionarioMutation.mutate(funcionario)
						setFuncionario({} as Funcionario)
						e.currentTarget.reset()
						firstInputRef.current?.focus()
					}}>
					<input
						type='text'
						placeholder='Nome'
						ref={firstInputRef}
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, nome: e.target.value })}
					/>
					<input
						type='text'
						placeholder='Sobrenome'
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, sobrenome: e.target.value })}
					/>
					<input
						type='text'
						placeholder='Cargo'
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, cargo: e.target.value })}
					/>
					<input
						type='number'
						placeholder='Salário'
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, salario: Number(e.target.value) })}
					/>
					<input
						type='number'
						placeholder='Idade'
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, idade: Number(e.target.value) })}
					/>
					<button type='submit' className='w-60 rounded-md bg-blue-500 p-2 text-white'>
						Cadastrar
					</button>
				</form>

				<section className='grid grid-cols-5 gap-5'>
					{data?.map((funcionario) => (
						<div key={funcionario.id} className='rounded-md border p-3'>
							<button
								className='mb-2 rounded-md bg-red-500 px-3 py-2 text-white'
								onClick={() => deleteFuncionarioMutation.mutate(funcionario.id)}>
								Excluir
							</button>
							<h2>Nome: {funcionario.nome}</h2>
							<p>Cargo: {funcionario.cargo}</p>
						</div>
					))}
				</section>
			</main>
		</>
	)
}

export default Home
