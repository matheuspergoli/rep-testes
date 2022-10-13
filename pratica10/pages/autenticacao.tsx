import Head from 'next/head'
import FormCadastro from '../components/Form/FormCadastro'
import AuthLayout from '../components/Layout/AuthLayout'

function Autenticacao() {
	return (
		<>
			<Head>
				<title>Login / Cadastro</title>
			</Head>
			<AuthLayout>
				<FormCadastro />
			</AuthLayout>
		</>
	)
}

export default Autenticacao
