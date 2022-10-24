import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

interface StyleAndThemeProps {
	children: React.ReactNode
}

export const GlobalStyle = createGlobalStyle`
	*, *::after, *::before {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}
`

export const theme = {
	colors: {
		mainBg: 'red',
		secondaryBg: 'blue'
	},
	fonts: {},
	spacings: {}
}

function StyleAndThemeProvider(props: StyleAndThemeProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{props.children}
		</ThemeProvider>
	)
}

export default StyleAndThemeProvider
