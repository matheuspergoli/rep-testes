import React from 'react'
import * as Styled from './styles'
import { ref, set } from 'firebase/database'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import logoImg from '../../assets/images/logo.svg'
import { database } from '../../services/firebase'
import googleIconImg from '../../assets/images/google-icon.svg'
import illustrationImg from '../../assets/images/illustration.svg'

export const Home = () => {
	const navigate = useNavigate()
	const { user, signInWithGoogle } = useAuth()
	const [roomCode, setRoomCode] = React.useState('')

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle()
		}

		navigate('/rooms/new')
	}

	async function handleJoinRoom(event: React.FormEvent) {
		event.preventDefault()

		if (roomCode.trim() === '') {
			return
		}

		const roomRef = ref(database, `rooms/${roomCode}`)

		if (!roomRef) {
			alert('Room does not exists.')
			return
		}

		navigate(`/rooms/${roomCode}`)
	}

	return (
		<Styled.Container>
			<aside>
				<img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
				<strong>Crie salas Q&A ao-vivo</strong>
				<p>Tire as dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
				<Styled.MainContent>
					<img src={logoImg} alt='Letmeask Logo' />
					<Styled.CreateRoomButton onClick={handleCreateRoom}>
						<img src={googleIconImg} alt='Logo do Google' />
						Crie sua sala com o Google
					</Styled.CreateRoomButton>
					<Styled.Separator>ou entre em uma sala</Styled.Separator>
					<form onSubmit={handleJoinRoom}>
						<input
							type='text'
							placeholder='Digite o código da sala'
							value={roomCode}
							onChange={(event) => setRoomCode(event.target.value)}
						/>
						<Button type='submit'>Entrar na sala</Button>
					</form>
				</Styled.MainContent>
			</main>
		</Styled.Container>
	)
}
