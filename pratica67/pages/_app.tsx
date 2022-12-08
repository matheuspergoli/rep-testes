import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())
	const [supabaseClient] = React.useState(() => createBrowserSupabaseClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
					<Component {...pageProps} />
				</SessionContextProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}

export default App
