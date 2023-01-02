import React from 'react'

export const App = () => {
	const [dados, setDados] = React.useState()

	async function fetchAPI() {
		const response = await fetch('http://localhost:3000/users')
		const data = await response.json()
		setDados(data)
	}

	React.useEffect(() => {
		fetchAPI()
	}, [])

	console.log(dados)

	return <h1>Hello World!</h1>
}
