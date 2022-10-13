import React from 'react'

interface TituloProps {
  titulo: string
}

function Titulo(props: TituloProps) {
  return (
    <h1 className='mb-5 text-2xl font-bold'>{props.titulo}</h1>
  )
}

export default Titulo