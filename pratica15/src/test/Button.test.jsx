import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

describe('<Button />', () => {
	it('Should render the text', () => {
		render(<Button />)

		const text = screen.getByText('Clique aqui')
		expect(text).toBeInTheDocument()
	})
})
