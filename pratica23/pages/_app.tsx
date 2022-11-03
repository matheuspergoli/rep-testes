import React from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { SessionProvider } from 'next-auth/react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	const { pathname } = useRouter()
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SessionProvider session={session}>
					{pathname !== '/login' && <Header />}
					<Component {...pageProps} />
				</SessionProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}

export default App
