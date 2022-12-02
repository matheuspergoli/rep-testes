import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
