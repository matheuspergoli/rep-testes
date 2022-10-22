import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('<App />', () => {
	it('Should increment the counter by 1', async () => {
		render(<App />)
		const counter = screen.getByText('Contador: 0')
		const btnIncrement = screen.getByRole('button', { name: 'Acrescentar' })
		await userEvent.click(btnIncrement)
		expect(counter.textContent).toBe('Contador: 1')
	})

	it('Should render the value of the input', async () => {
		render(<App />)
		const input = screen.getByPlaceholderText('Digite algo...')
		const inputTextValue = screen.getByText('Valor do Input:')
		await userEvent.type(input, 'Matheus Pergoli')
		expect(inputTextValue.textContent).toBe('Valor do Input: Matheus Pergoli')
		expect(input).toHaveValue('Matheus Pergoli')
	})

	it('Should disable the button', async () => {
		render(<App />)
		const counter = screen.getByText('Contador: 0')
		const btnDecrement = screen.getByRole('button', { name: 'Decrementar' })
		const btnIncrement = screen.getByRole('button', { name: 'Acrescentar' })
		await userEvent.click(btnIncrement)
		expect(counter.textContent).toBe('Contador: 1')
		await userEvent.click(btnDecrement)
		expect(counter.textContent).toBe('Contador: 0')
		expect(btnDecrement).toBeDisabled()
	})
})
