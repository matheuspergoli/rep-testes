import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './globals.css'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from '../src/context/searchContext'
import { DarkModeProvider } from './context/darkModeContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<DarkModeProvider>
				<SearchProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</SearchProvider>
			</DarkModeProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
