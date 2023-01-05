import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getGames, addGames, deleteGames } from '../service'
import { useSession, signIn, signOut } from 'next-auth/react'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import { QueryClient, useQuery, useQueryClient, useMutation, dehydrate } from 'react-query'

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery('games', getGames)
	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}

interface IGames {
	id: string
	name: string
	description: string
	addedBy: string
	createdAt: string
}

interface ICreatedGame {
	name: string
	description: string
}

function Home() {
	const queryClient = useQueryClient()
	const { data: session, status } = useSession()
	const [game, setGame] = React.useState({} as ICreatedGame)
	const { data } = useQuery<IGames[]>({ queryKey: 'games', queryFn: getGames })
	const [qtdData, setQtdData] = React.useState(data)

	const addGameMutation = useMutation(addGames, {
		onSuccess: () => {
			queryClient.invalidateQueries('games')
		}
	})

	const deleteGameMutation = useMutation(deleteGames, {
		onSuccess: () => {
			queryClient.invalidateQueries('games')
		}
	})

	React.useEffect(() => {
		setQtdData(data)
	}, [data])

	return (
		<>
			<Head>
				<title>NextJS App</title>
			</Head>
			<main className='container mx-auto p-3'>
				<h1 className='mb-10 text-2xl font-bold'>Games</h1>
				<form className='mb-10 flex flex-col gap-3' onSubmit={(e) => e.preventDefault()}>
					<input
						type='text'
						placeholder='Name'
						className='rounded-md border p-2 text-black'
						onChange={(e) => setGame({ ...game, name: e.target.value })}
					/>
					<input
						id='description'
						placeholder='Description'
						className='rounded-md border p-2 text-black'
						onChange={(e) => setGame({ ...game, description: e.target.value })}
					/>
					<button
						type='submit'
						className='rounded-md bg-blue-500 px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50'
						disabled={session?.user?.email === undefined}
						onClick={() =>
							addGameMutation.mutate({
								name: game.name,
								description: game.description,
								addedBy: session?.user?.email as string,
								createdAt: new Date().toISOString()
							})
						}>
						Add Game
					</button>
				</form>
				<section className='mb-10'>
					{status === 'authenticated' ? (
						<>
							<p className='mb-2 font-semibold'>Signed in as {session?.user?.email}</p>
							<button className='rounded-md bg-blue-500 px-3 py-2 text-white' onClick={() => signOut()}>
								Sign out
							</button>
						</>
					) : (
						<>
							<p className='mb-2 font-semibold'>Faça login para adicionar</p>
							<button className='rounded-md bg-blue-500 px-3 py-2 text-white' onClick={() => signIn()}>
								Sign in
							</button>
						</>
					)}
				</section>
				<AnimatePresence mode='popLayout'>
					<Reorder.Group axis='y' values={qtdData as any} onReorder={setQtdData}>
						{qtdData?.map((game) => (
							<Reorder.Item key={game.id} value={game}>
								<motion.div
									layout
									className='mb-5 rounded-md border p-2'
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.8, opacity: 0 }}
									transition={{ type: 'tween' }}>
									<button
										className='rounded-md bg-red-500 px-3 py-2 text-white'
										onClick={() => deleteGameMutation.mutate(game.id)}>
										Delete
									</button>
									<h2 className='text-xl font-bold'>{game.name}</h2>
									<p className=''>{game.description}</p>
									<p className=''>Adicionado por: {game.addedBy}</p>
									<p>Adicionado: {Intl.DateTimeFormat('pt-BR').format(new Date(game.createdAt))}</p>
								</motion.div>
							</Reorder.Item>
						))}
					</Reorder.Group>
				</AnimatePresence>
			</main>
		</>
	)
}

export default Home
