import React from 'react'
import { AppContext } from '../../data/context/AppContext'
import AvatarUsuario from './AvatarUsuario'
import BotaoAlternarTema from './BotaoAlternarTema'
import Titulo from './Titulo'

interface CabecalhoProps {
	titulo: string
	subtitulo: string
}

function Cabecalho(props: CabecalhoProps) {
	const { tema, alternarTema } = React.useContext(AppContext)

	return (
		<div className='flex'>
			<Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
			<div className='flex flex-grow items-center justify-end gap-3'>
				<BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
				<AvatarUsuario />
			</div>
		</div>
	)
}

export default Cabecalho
