import React from 'react'

interface CardProps {
	className: string
	children: React.ReactNode
}

function Card(props: CardProps) {
	return <section className={`p-5 ${props.className}`}>{props.children}</section>
}

export default Card
