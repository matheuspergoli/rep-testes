/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				bgTitle: '#6055a5',
				btnGreen: '#38cc8c',
				borderColor: 'hsl(246, 25%, 77%)',
				btnHover: 'hsla(154, 59%, 51%, 0.6)'
			}
		}
	},
	plugins: []
}
