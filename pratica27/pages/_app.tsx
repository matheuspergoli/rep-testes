import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { DarkModeContextProvider } from '../context/DarkModeContext'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<DarkModeContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</DarkModeContextProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}

export default App
