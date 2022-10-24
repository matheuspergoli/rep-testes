import React from 'react'
import * as Styled from './styles.js'

interface HeadingProps {
	children: React.ReactNode
}

function Heading(props: HeadingProps) {
	return (
		<Styled.Wrapper>
			<h1>React App Teste</h1>
			{props.children}
		</Styled.Wrapper>
	)
}

export default Heading
