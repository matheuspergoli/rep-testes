import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardFilm from '.'

export default {
	title: 'Card Film',
	component: CardFilm
} as ComponentMeta<typeof CardFilm>

const Template: ComponentStory<typeof CardFilm> = (args: any) => <CardFilm {...args} />

export const Default = Template.bind({})

Default.args = {
	id: 1,
	title: 'Black Adam',
	poster_path: 'https://image.tmdb.org/t/p/original/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg'
}
