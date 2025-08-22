/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx,jsx,js}'
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['Outfit', 'Inter', 'system-ui'],
				sans: ['Inter', 'system-ui']
			},
			colors: {
				highlight: '#facc15',
				primary: '#1e293b',
				accent: '#334155'
			}
		}
	},
	plugins: []
};

