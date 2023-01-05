interface IGame {
	name: string
	description: string
	addedBy: string
	createdAt: string
}

export const addGames = async (game: IGame) => {
	const response = await fetch('http://localhost:3000/api/games', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(game)
	})
	const json = await response.json()
	return json
}
