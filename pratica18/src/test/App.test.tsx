import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import renderTheme from '../styles/renderTheme'
import App from '../App'

describe('<App />', () => {
	it('Should render', () => {
		renderTheme(<App />)
	})
})
