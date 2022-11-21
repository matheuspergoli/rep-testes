// Interface para um Country
interface Country {
	name: string
	capital: string
	continent: {
		name: string
	}
}

// Interface para um array de Country
interface Countries {
	countries: Array<Country>
}
