/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				'btn-color': '#121212',
				'gray-color': '#464646',
				'input-color': '#E5E5E5',
				'twitter-color': '#56A7F2',
				'facebook-color': '#1E3C72'
			}
		}
	},
	plugins: []
}
