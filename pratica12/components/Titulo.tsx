import React from 'react'

interface TituloProps {
	titulo: string
}

function Titulo(props: TituloProps) {
	return (
		<h1 className='mb-5 uppercase text-2xl font-bold text-white'>
			{props.titulo}
		</h1>
	)
}

export default Titulo
