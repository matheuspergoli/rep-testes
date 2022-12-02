import {} from 'styled-components'

interface ITheme {
	colors: {
		green: string
		greenLight: string
		background: string
		cards: string
		divider: string
		placeholder: string
		textApoio: string
		text: string
		textTitles: string
		white: string
		redDanger: string
	}
	font: {
		roboto: string
	}
}

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
