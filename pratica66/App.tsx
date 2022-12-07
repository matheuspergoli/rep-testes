import React from 'react'
import { THEME } from './src/styles/theme'
import { SignIn } from './src/screens/SignIn'
import { NativeBaseProvider, Box } from 'native-base'

export default function App() {
	return (
		<NativeBaseProvider theme={THEME}>
			<SignIn />
		</NativeBaseProvider>
	)
}
