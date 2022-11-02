import React from 'react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}

export default App
