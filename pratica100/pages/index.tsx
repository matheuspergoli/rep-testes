import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getAllFuncionarios, createFuncionario, deleteFuncionario } from '../service'
import { QueryClient, useQuery, useMutation, useQueryClient, dehydrate } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('funcionarios', getAllFuncionarios)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

interface Funcionario {
	id?: string
	nome: string
	sobrenome: string
	cargo: string
	salario: string | number
	idade: string | number
}

function Home() {
	const [funcionario, setFuncionario] = React.useState<Funcionario>({
		nome: '',
		sobrenome: '',
		cargo: '',
		salario: '',
		idade: ''
	})
	const { data } = useQuery<Funcionario[]>({ queryKey: 'funcionarios', queryFn: getAllFuncionarios })
	const queryClient = useQueryClient()

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
				<h1 className='mb-5 text-2xl font-bold'>Funcionários</h1>
				<form
					className='mb-10 flex flex-col gap-3'
					onSubmit={(e) => {
						e.preventDefault()
						setFuncionario({
							nome: '',
							sobrenome: '',
							cargo: '',
							salario: '',
							idade: ''
						})
					}}>
					<input
						type='text'
						placeholder='Nome'
						value={funcionario.nome}
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, nome: e.target.value })}
					/>
					<input
						type='text'
						placeholder='Sobrenome'
						value={funcionario.sobrenome}
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, sobrenome: e.target.value })}
					/>
					<input
						type='text'
						placeholder='Cargo'
						value={funcionario.cargo}
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, cargo: e.target.value })}
					/>

					<input
						type='number'
						placeholder='Salário'
						value={funcionario.salario}
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, salario: Number(e.target.value) })}
					/>

					<input
						type='number'
						placeholder='Idade'
						value={funcionario.idade}
						className='w-60 rounded-md border p-2'
						onChange={(e) => setFuncionario({ ...funcionario, idade: Number(e.target.value) })}
					/>
					<button
						type='submit'
						className='w-60 rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600'
						onClick={() => createUserMutation.mutate(funcionario)}>
						Criar funcionário
					</button>
				</form>

				<section className='flex flex-col gap-5'>
					{data?.map((funcionario) => (
						<article key={funcionario.id} className='rounded-md border p-3'>
							<button
								className='rounded-md bg-red-500 px-3 py-2 text-white'
								onClick={() => deleteUserMutation.mutate(funcionario.id as string)}>
								Deletar
							</button>
							<p>
								<span className='font-bold'>Nome:</span> {funcionario.nome} {funcionario.sobrenome}
							</p>
							<p>
								<span className='font-bold'>Cargo:</span> {funcionario.cargo}
							</p>
							<p>
								<span className='font-bold'>Salário:</span> R$ {funcionario.salario}
							</p>
							<p>
								<span className='font-bold'>Idade:</span> {funcionario.idade}
							</p>
						</article>
					))}
				</section>
			</main>
		</>
	)
}

export default Home
