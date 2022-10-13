import Head from 'next/head'
import FormAtual from '../components/Form/FormAtual'
import AuthLayout from '../components/Layout/AuthLayout'

function Autenticacao() {
	return (
		<>
			<Head>
				<title>Login / Cadastro</title>
			</Head>
			<AuthLayout>
				<FormAtual />
			</AuthLayout>
		</>
	)
}

export default Autenticacao
