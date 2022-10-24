import Heading from '.'

export default {
	title: 'Heading',
	component: Heading,
	args: {
		children: 'Teste'
	}
}

export const Template = (args: any) => <Heading {...args} />