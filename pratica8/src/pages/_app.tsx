import { AppContextProvider } from '../data/context/AppContext'
import { AuthContextProvider } from '../data/context/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<AppContextProvider>
				<Component {...pageProps} />
			</AppContextProvider>
		</AuthContextProvider>
	)
}

export default MyApp
