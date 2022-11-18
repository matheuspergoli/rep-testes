/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-blue': '#04c2c9',
				'main-black': '#333',
				'input': '#1e242c'
			}
		}
	},
	plugins: []
}
