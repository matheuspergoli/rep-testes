import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</GlobalStyles>
		</BrowserRouter>
	</React.StrictMode>
)
