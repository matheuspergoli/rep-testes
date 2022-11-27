import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
			<Text>Changes you make will automatically reload.</Text>
			<Text>Shake your phone to open the developer menu.</Text>
			<TextInput>Teste</TextInput>
			<Button title='Clique aqui' />
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	text: {
		color: 'red',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20
	}
})
