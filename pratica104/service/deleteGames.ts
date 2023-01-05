export const deleteGames = async (id: string) => {
	const response = await fetch('http://localhost:3000/api/games', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ id })
	})
	const data = await response.json()
	return data
}
