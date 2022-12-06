import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

function MyApp({ Component, pageProps }: AppProps) {
	const [supabaseClient] = React.useState(() => createBrowserSupabaseClient())

	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}>
			<Component {...pageProps} />
		</SessionContextProvider>
	)
}
export default MyApp
