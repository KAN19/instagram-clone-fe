module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"blue-custom": "#0095F6",
				"white-custom": "#ffffff",
				"text-color": "#262626",
				"background-custom": "#fafafa",
				"border-custom": "#DBDBDB",
				"button-disable": "#B2DFFC",
			},
		},
	},
	plugins: [],
};
