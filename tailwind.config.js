/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('../public/pink-clouds.jpg')",
				'sa-logo': 'url(../public/sa-logo-transparent.png)',
			},
			backgroundSize: {
				'here-pattern-size': 'contain',
			},
		},
	},
	plugins: [],
};
