import { ComponentMeta, ComponentStory } from '@storybook/react'
import HeadingMenu from '.'

export default {
	title: 'Heading Menu',
	component: HeadingMenu
} as ComponentMeta<typeof HeadingMenu>

export const Default: ComponentStory<typeof HeadingMenu> = () => <HeadingMenu />
