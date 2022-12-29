import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getAllFuncionarios, deleteFuncionario } from '../services'
import { QueryClient, useQuery, useQueryClient, useMutation, dehydrate } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery('funcionarios', getAllFuncionarios)

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

function Home() {
	const queryClient = useQueryClient()
	const { data: funcionarios } = useQuery({ queryKey: ['funcionarios'], queryFn: getAllFuncionarios })

	const deleteFuncionarioMutation = useMutation(deleteFuncionario, {
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
				<section className='flex flex-col'>
					{funcionarios?.map((funcionario) => (
						<article
							key={funcionario.id}
							className='flex w-80 flex-row items-center justify-between rounded-md border p-3'>
							<div className='flex flex-row items-center'>
								<div className='flex flex-col'>
									<span className='font-bold'>
										{funcionario.nome} {funcionario.sobrenome}
									</span>
									<span className='text-sm text-gray-500'>{funcionario.cargo}</span>
								</div>
							</div>
							<button
								className='rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-600'
								onClick={() => deleteFuncionarioMutation.mutate(funcionario.id)}>
								Excluir
							</button>
						</article>
					))}
				</section>
			</main>
		</>
	)
}

export default Home
