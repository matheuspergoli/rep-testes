import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ProSidebarProvider>
					<Component {...pageProps} />
				</ProSidebarProvider>
			</Hydrate>
		</QueryClientProvider>
	)
}
