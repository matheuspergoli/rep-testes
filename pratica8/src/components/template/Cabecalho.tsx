import React from 'react'
import { AppContext } from '../../data/context/AppContext'
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
			<div className='flex flex-grow justify-end'>
				<BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
			</div>
		</div>
	)
}

export default Cabecalho
