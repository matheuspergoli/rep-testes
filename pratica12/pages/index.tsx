import Head from 'next/head'
import Button from '../components/Button'
import Card from '../components/Card'
import Paragrafo from '../components/Paragrafo'
import Titulo from '../components/Titulo'

function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='flex items-center justify-center mx-auto max-w-5xl h-screen'>
				<Card className='rounded-tl-lg rounded-bl-lg bg-green-600'>
					<Titulo titulo='Programação' />
					<Paragrafo className='mb-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
						minus, accusantium voluptates facere animi in illo natus et ea
						accusamus repellat magnam quia sint, aut eius consectetur molestias
						excepturi.
					</Paragrafo>
					<Paragrafo>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
						minus, accusantium voluptates facere animi in illo natus et ea
					</Paragrafo>
					<Button className='text-green-600' />
				</Card>

				<Card className='bg-gray-800'>
					<Titulo titulo='UI / UX' />
					<Paragrafo className='mb-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
						minus, accusantium voluptates facere animi in illo natus et ea
						accusamus repellat magnam quia sint, aut eius consectetur molestias
						excepturi.
					</Paragrafo>
					<Paragrafo>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
						minus, accusantium voluptates facere animi in illo natus et ea
					</Paragrafo>
					<Button className='text-gray-800' />
				</Card>

				<Card className='rounded-tr-lg rounded-br-lg bg-blue-600'>
					<Titulo titulo='Mentorias' />
					<Paragrafo className='mb-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
						minus, accusantium voluptates facere animi in illo natus et ea
						accusamus repellat magnam quia sint, aut eius consectetur molestias
						excepturi.
					</Paragrafo>
					<Paragrafo>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
						minus, accusantium voluptates facere animi in illo natus et ea
					</Paragrafo>
					<Button className='text-blue-600' />
				</Card>
			</main>
		</>
	)
}

export default Home
