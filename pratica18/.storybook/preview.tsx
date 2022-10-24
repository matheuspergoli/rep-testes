import React from 'react'
import { ThemeProvider } from 'styled-components'
import StyleAndThemeProvider from '../src/styles/global'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

export const decorators = [
	(Story: any) => (
		<StyleAndThemeProvider>
			<Story />
		</StyleAndThemeProvider>
	)
]
