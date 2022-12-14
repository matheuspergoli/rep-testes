import React from 'react'
import { AppProps } from 'next/app'
import Dial from '../components/Dial'
import Navbar from '../components/Menu'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import '../styles/globals.css'
import '../styles/animated-classes.css'
import '../styles/background-animation.css'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				{router.pathname !== '/' ? <Navbar /> : null}
				<Component {...pageProps} />
				{router.pathname !== '/' ? <Footer /> : null}
				{router.pathname !== '/' ? <Dial /> : null}
			</Hydrate>
		</QueryClientProvider>
	)
}
