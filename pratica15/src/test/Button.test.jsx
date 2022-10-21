import { describe, expect, it, vi, vitest } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/Button'

describe('<Button />', () => {
	it('Should render the text', () => {
		render(<Button />)

		const text = screen.getByText('Clique aqui')
		expect(text).toBeInTheDocument()
	})

	it('Should call function on button click', () => {
		const fn = vitest.fn()
		render(<Button onClick={fn} />)

		const button = screen.getByText('Clique aqui')
		fireEvent.click(button)
		expect(fn).toBeCalledTimes(1)
	})
})
