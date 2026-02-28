/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			boxShadow: {
				"header-button": "0px 0px 33px 0px rgba(255, 255, 255, 0.2)",
			},
			screens: {
				"3xl": "1920px",
				"4xl": "2560px",
			},
			maxWidth: {
				"8xl": "1440px",
				"9xl": "1600px",
				"10xl": "1800px",
			},
		},
	},
	plugins: [],
};
