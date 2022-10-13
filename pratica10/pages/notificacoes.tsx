import Head from 'next/head'
import Layout from '../components/Layout'

function Notificacoes() {
	return (
		<>
			<Head>
				<title>Notificações</title>
			</Head>
			<Layout>
				<h1 className='text-3xl font-bold'>Página Notificações</h1>
				<p>Conteúdo da Página de Notificações</p>
			</Layout>
		</>
	)
}

export default Notificacoes
