export async function getGames() {
	const response = await fetch('http://localhost:3000/api/games')
	const json = await response.json()
	return json
}
