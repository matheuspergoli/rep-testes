import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../Button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		label: {
			defaultValue: 'Clique aqui'
		},
		font: {
			defaultValue: 'font-normal',
			control: { type: 'radio' },
			options: ['font-normal', 'font-semibold', 'font-bold']
		},
		background: {
			defaultValue: 'bg-blue-500',
			control: { type: 'radio' },
			options: ['bg-blue-500', 'bg-blue-700', 'bg-blue-900']
		},
		radius: {
			defaultValue: 'rounded-sm',
			control: { type: 'radio' },
			options: ['rounded-sm', 'rounded-md', 'rounded-full']
		}
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
