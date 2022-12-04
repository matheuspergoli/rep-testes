import React from 'react'
import * as Styled from './styles'
import { ref, set } from 'firebase/database'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../../components/Button'
import { database } from '../../services/firebase'
import logoImg from '../../assets/images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import illustrationImg from '../../assets/images/illustration.svg'

export const NewRoom = () => {
	const { user } = useAuth()
	const navigate = useNavigate()
	const [newRoom, setNewRoom] = React.useState('')

	async function handleCreateRoom(event: React.FormEvent) {
		event.preventDefault()

		if (newRoom.trim() === '') {
			return
		}

		const roomRef = ref(database, 'rooms')

		const firebaseRoom = await set(roomRef, {
			title: newRoom,
			authorId: user?.id
		})

		navigate(`/rooms/${user?.id}`)
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
					<h2>Criar uma nova sala</h2>
					<form onSubmit={handleCreateRoom}>
						<input
							type='text'
							placeholder='Nome da sala'
							value={newRoom}
							onChange={(event) => setNewRoom(event.target.value)}
						/>
						<Button type='submit'>Criar sala</Button>
					</form>
					<p>
						Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
					</p>
				</Styled.MainContent>
			</main>
		</Styled.Container>
	)
}
