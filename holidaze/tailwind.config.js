const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		// color scheme
		colors: {
			orange: "#F19A3E",
			lightBlack: "#313132",
			darkBlack: "#161618",
			silver: "#eaeaea",
			white: "#FFF",
			black: "#000",
			grey: "#ACACAC",
			red: "#EF626C",
		},

		fontSize: {
			xs: ".512rem",
			sm: ".64rem",
			tiny: ".8rem",
			base: "1rem",
			lg: "1.25rem",
			xl: "1.563rem",
			"2xl": "1.953rem",
			"3xl": "2.441rem",
			"4xl": "3.052rem",
		},
		screens: {
			xs: "530px",
			...defaultTheme.screens,
		},
		extend: {},
	},
	plugins: [],
};
