/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#60A9BC',
				'secondary': '#CEF7EE',
				'tertiary': '#7F93AC',
				'new': '#059669',
				'improved': '#0284c7',
				'fixed': '#dc2626',
				'cleanup': '#d97706',
			},
		},
	},
	plugins: [],
}
