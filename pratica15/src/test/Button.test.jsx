import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../components/Button'

describe('<Button />', () => {
	it('Should render', () => {
		render(<Button />)
		const button = screen.getByRole('button', { name: 'Clique aqui!' })
		expect.assertions(1)
		expect(button).toBeInTheDocument()
	})

	it('Should call function on click', async () => {
		const fn = vitest.fn()
		render(<Button onClick={fn} />)
		const button = screen.getByRole('button', { name: 'Clique aqui!' })
		expect.assertions(1)
		await userEvent.click(button)
		await userEvent.click(button)
		expect(fn).toBeCalledTimes(2)
	})

	it('Should have the class active:scale-95', () => {
		render(<Button />)
		const button = screen.getByRole('button', { name: 'Clique aqui!' })
		expect.assertions(1)
		expect(button).toHaveClass('active:scale-95')
	})

	it('Should match the snapshot', () => {
		render(<Button />)
		const button = screen.getByRole('button', { name: 'Clique aqui!' })
		expect.assertions(1)
		expect(button).toMatchSnapshot()
	})
})
