import React from 'react'

interface TitleProps {
	title: string
}

function Title(props: TitleProps) {
	return <h1 className='font-bold text-2xl mb-5'>{props.title}</h1>
}

export default Title
