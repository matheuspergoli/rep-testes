import React from 'react'

enum ClassNames {
	primary = 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition disabled:bg-opacity-50 disabled:cursor-not-allowed',
	secondary = 'bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded transition disabled:bg-opacity-50 disabled:cursor-not-allowed'
}

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

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={ClassNames[props.variant || 'primary']}
			disabled={props.disabled}
			type={props.type}
			value={props.value}>
			{props.loading ? 'Loading...' : props.label}
		</button>
	)
}
