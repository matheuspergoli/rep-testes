import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const ResetStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    color: #29292e;
    background-color: #f8f8f8;
  }

  body, input, textarea, button {
    font: 400 16px 'Roboto', sans-serif;
  }
`

export const GlobalStyles = (props: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={{}}>
			<ResetStyles />
			{props.children}
		</ThemeProvider>
	)
}
