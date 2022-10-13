import '../styles/globals.css'
import { FormAtualContextProvider } from '../context/FormAtualContext'
import { UserLoggedContextProvider } from '../context/UserLoggedContext'
import { DarkModeContextProvider } from '../context/DarkModeContext'

function MyApp({ Component, pageProps }) {
	return (
		<UserLoggedContextProvider>
			<FormAtualContextProvider>
				<DarkModeContextProvider>
					<Component {...pageProps} />
				</DarkModeContextProvider>
			</FormAtualContextProvider>
		</UserLoggedContextProvider>
	)
}

export default MyApp
