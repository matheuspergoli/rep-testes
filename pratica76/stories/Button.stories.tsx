import { Button } from '../components/Button'

interface ButtonProps {
	/** Button label */
	label: string

	/** Button disabled state */
	disabled?: boolean

	/** Button loading state */
	loading?: boolean

	/** Button type */
	type?: 'button' | 'submit' | 'reset'

	/** Button value */
	value?: string

	/** Button className */
	variant?: 'primary' | 'secondary'
}

export default {
	component: Button
}

export const Primary = {
	render: (args: ButtonProps) => <Button {...args} />
}
