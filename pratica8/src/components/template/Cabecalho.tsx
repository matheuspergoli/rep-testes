import React from 'react'
import Titulo from './Titulo'

interface CabecalhoProps {
	titulo: string
	subtitulo: string
}

function Cabecalho(props: CabecalhoProps) {
	return (
		<div>
			<Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
		</div>
	)
}

export default Cabecalho
