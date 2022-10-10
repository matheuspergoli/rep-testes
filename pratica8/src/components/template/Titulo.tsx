import React from 'react'

interface TituloProps {
	titulo: string
	subtitulo: string
}

function Titulo(props: TituloProps) {
  return (
    <div>
      <h1 className=''>{props.titulo}</h1>
      <h2 className=''>{props.subtitulo}</h2>
    </div>
  )
}

export default Titulo