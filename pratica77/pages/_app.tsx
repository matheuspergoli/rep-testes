import React from 'react'
import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Hydrate>
		</QueryClientProvider>
	)
}
