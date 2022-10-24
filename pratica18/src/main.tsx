import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StyleAndThemeProvider from '../src/styles/global.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StyleAndThemeProvider>
			<App />
		</StyleAndThemeProvider>
	</React.StrictMode>
)
