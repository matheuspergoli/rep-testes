import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider } from 'next-auth/react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SessionProvider session={pageProps.session}>
					<Header />
					<Component {...pageProps} />
				</SessionProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}
