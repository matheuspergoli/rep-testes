import React from 'react'
import AuthInput from '../components/auth/AuthInput'
import { IconeAtencao } from '../components/Icons'
import { AuthContext } from '../data/context/AuthContext'

function Autenticacao() {
	const { usuario, loginGoogle } = React.useContext(AuthContext)

	const [erro, setErro] = React.useState(null)
	const [email, setEmail] = React.useState('')
	const [senha, setSenha] = React.useState('')
	const [modo, setModo] = React.useState<'login' | 'cadastro'>('login')

	function exibirErro(msg: string, tempoEmSegundos = 5) {
		setErro(msg)
		setTimeout(() => {
			setErro(null)
		}, tempoEmSegundos * 1000)
	}

	function submeter() {
		if (modo === 'login') {
			console.log('Login')
		} else {
			console.log('Cadastrar')
		}
	}

	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='hidden md:w-1/2 md:block lg:w-2/3'>
				<img
					src='https://source.unsplash.com/random'
					alt='Imagem da Tela de Autenticação'
					className='h-screen w-full object-cover'
				/>
			</div>
			<div className='m-10 w-full md:w-1/2 lg:w-1/3'>
				<h1 className='text-3xl font-bold mb-5'>
					{modo === 'login'
						? 'Entre com a Sua Conta'
						: 'Cadastre-se na Plataforma'}
				</h1>
				{erro ? (
					<div className='flex items-center gap-2 py-3 px-5 my-2 border rounded-lg border-red-700 bg-red-400 text-white'>
						{IconeAtencao(6)}
						<span>{erro}</span>
					</div>
				) : (
					false
				)}
				<AuthInput
					label='Email'
					tipo='email'
					valor={email}
					valorMudou={setEmail}
					obrigatorio
				/>
				<AuthInput
					label='Senha'
					tipo='password'
					valor={senha}
					valorMudou={setSenha}
					obrigatorio
				/>
				<button
					onClick={submeter}
					className='w-full px-4 py-3 mt-6 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400'>
					{modo === 'login' ? 'Entrar' : 'Cadastrar'}
				</button>
				<hr className='my-6 w-full border-gray-300' />
				<button
					onClick={loginGoogle}
					className='w-full px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-400'>
					{modo === 'login' ? 'Entrar com Google' : 'Cadastre-se com Google'}
				</button>
				{modo === 'login' ? (
					<p className='mt-8'>
						Novo por aqui?{' '}
						<a
							onClick={() => setModo('cadastro')}
							className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'>
							Crie uma conta gratuitamente
						</a>
					</p>
				) : (
					<p className='mt-8'>
						Já faz parte da nossa comunidade?{' '}
						<a
							onClick={() => setModo('login')}
							className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'>
							Entre com as suas credenciais
						</a>
					</p>
				)}
			</div>
		</div>
	)
}

export default Autenticacao
