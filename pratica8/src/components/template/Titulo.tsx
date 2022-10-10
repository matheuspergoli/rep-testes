import React from 'react'

interface TituloProps {
	titulo: string
	subtitulo: string
}

function Titulo(props: TituloProps) {
	return (
		<div>
			<h1 className='font-bold text-3xl text-gray-900'>{props.titulo}</h1>
			<h2 className='font-light text-sm text-gray-600'>{props.subtitulo}</h2>
		</div>
	)
}

export default Titulo
