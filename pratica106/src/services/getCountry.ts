export const getCountry = async (id: string) => {
	const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
	const data = await response.json()
	return data
}
