import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/public/bg-coffee.jpg')",
				'footer-texture': "url('/public/coffee1.jpg')",
			},
		},
		screens: {
			xs: '300px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1536px',
		},
		colors: {
			'dark-brown': 'rgb(68 20 11)',
			'mid-brown': 'rgb(118 71 50)',
			brown: '#3c2111',
			'light-brown': '#836752',
			'bright-brown': '#d5be78',
			'bg-brown': '#7c5932',
		},
	},
	plugins: [],
}
export default config
