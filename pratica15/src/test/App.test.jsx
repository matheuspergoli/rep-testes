import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from '../App'

describe('<App />', () => {
	it('Should be 1', () => {
		expect(1).toBe(1)
	})

	it('Should be 5', () => {
		expect(2.5 + 2.5).toBe(5)
	})
})
