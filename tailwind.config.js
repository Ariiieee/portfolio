/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63e96",
				primaryDark: "#58e6d9",
			},
		},
	},
	plugins: [],
};
