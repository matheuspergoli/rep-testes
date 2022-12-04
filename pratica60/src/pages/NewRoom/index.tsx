import * as Styled from './styles'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import logoImg from '../../assets/images/logo.svg'
import illustrationImg from '../../assets/images/illustration.svg'

export const NewRoom = () => {
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
					<form>
						<input type='text' placeholder='Nome da sala' />
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
