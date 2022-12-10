import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</BrowserRouter>
	</React.StrictMode>
)
