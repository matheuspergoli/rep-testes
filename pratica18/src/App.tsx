import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: fit-content;
	background-color: ${(theme) => theme.theme.colors.mainBg};
`

function App() {
	return (
		<main>
			<Wrapper>React App</Wrapper>
		</main>
	)
}

export default App
