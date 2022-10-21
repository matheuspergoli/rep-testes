import { describe, expect, it, vi, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/Button'

describe('<Button />', () => {
	it('Should render the text', () => {
		render(<Button />)

		expect.assertions(1)

		const text = screen.getByText('Clique aqui')
		expect(text).toBeInTheDocument()
	})

	it('Should call function on button click', async () => {
		const fn = vitest.fn()
		render(<Button onClick={fn} />)

		expect.assertions(1)

		const button = screen.getByText('Clique aqui')
		await userEvent.click(button)
		expect(fn).toBeCalledTimes(1)
	})
})
