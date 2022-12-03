import React from 'react'
import * as Styled from './styles'
import { Button } from '../../components/Button'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import illustrationImg from '../../assets/images/illustration.svg'

export const Home = () => {
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
					<Styled.CreateRoomButton>
						<img src={googleIconImg} alt='Logo do Google' />
						Crie sua sala com o Google
					</Styled.CreateRoomButton>
					<Styled.Separator>ou entre em uma sala</Styled.Separator>
					<form>
						<input type='text' placeholder='Digite o código da sala' />
						<Button type='submit'>Entrar na sala</Button>
					</form>
				</Styled.MainContent>
			</main>
		</Styled.Container>
	)
}
