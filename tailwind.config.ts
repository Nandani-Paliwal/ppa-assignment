import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
		  colors: {
			primary: "#28CB8B",
			secondary: "#263238",
			info: "#2194f3",
			primaryShade: {
			  1: "#43A046",
			  2: "#388E3B",
			  3: "#237D31",
			  4: "#1B5E1F",
			  5: "#103E13",
			},
			primaryTint: {
			  1: "#66BB69",
			  2: "#81C784",
			  3: "#A5D6A7",
			  4: "#C8E6C9",
			  5: "#E8F5E9",
			},
			darkGrey: "#4D4D4D",
			grey: "#717171",
			lightGrey: "#89939E",
			blueGrey: "#ABBED1",
			silver: "#F5F7FA",
			warning: "#FBC02D",
			error: "#E53835",
			success: "#2E7D31",
		  },
		  fontSize: {
			h1: [
			  "64px",
			  {
				lineHeight: "76px",
				letterSpacing: "0%",
			  },
			],
			h2: [
			  "36px",
			  {
				lineHeight: "44px",
				letterSpacing: "0%",
			  },
			],
			h3: [
			  "28px",
			  {
				lineHeight: "36px",
				letterSpacing: "0%",
			  },
			],
			h4: [
			  "20px",
			  {
				lineHeight: "28px",
				letterSpacing: "%",
			  },
			],
			"para-1": [
			  "18px",
			  {
				lineHeight: "28px",
				letterSpacing: "0%",
			  },
			],
			"para-2": [
			  "16px",
			  {
				lineHeight: "24px",
				letterSpacing: "0%",
			  },
			],
			"para-3": [
			  "14px",
			  {
				lineHeight: "20px",
				letterSpacing: "0%",
			  },
			],
			"para-4": [
			  "12px",
			  {
				lineHeight: "16px",
				letterSpacing: "0%",
			  },
			],
		  },
		  boxShadow: {
			xs: "0px 2px 4px rgba(171, 190, 209, 0.6)",
			sm: "0px 4px 8px rgba(171, 190, 209, 0.4)",
			md: "0px 6px 12px rgba(171, 190, 209, 0.3)",
			lg: "0px 8px 16px rgba(171, 190, 209, 0.4)",
			xl: "0px 16px 32px rgba(171, 190, 209, 0.3)",
		  },
		  backgroundImage: {
			"glow-conic":
			  "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
		  },
		},
	  },
	plugins: [require('@tailwindcss/typography')]
}
export default config
