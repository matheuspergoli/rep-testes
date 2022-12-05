import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthProvider } from './context/UserAuth'

import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserAuthProvider>
				<App />
			</UserAuthProvider>
		</BrowserRouter>
	</React.StrictMode>
)
