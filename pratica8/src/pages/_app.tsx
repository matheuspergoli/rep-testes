import { AppContextProvider } from '../data/context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
		</AppContextProvider>
	)
}

export default MyApp
