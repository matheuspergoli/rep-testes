import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

function Home() {
	const clientes = [
		new Cliente('Ana', 34, '1'),
		new Cliente('Matheus', 23, '2'),
		new Cliente('Karla', 33, '3'),
		new Cliente('Sophia', 15, '4'),
		new Cliente('Arthur', 12, '5')
	]

	return (
		<main className='flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-purple-500 to-blue-500'>
			<Layout titulo='Cadastro Simples'>
				<Tabela clientes={clientes} />
			</Layout>
		</main>
	)
}

export default Home
