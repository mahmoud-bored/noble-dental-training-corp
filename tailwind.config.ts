import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		supports: {
			dvh: 'height: 100dvh'
		},
		extend: {
			fontFamily: {
				'messiri': ['El Messiri', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'inria': ['Inria Sans', 'sans-serif'],
			},
			borderWidth: {
				'3': '3px',
			},
			colors: {
				earth: {
					'100': '#F4F1EB',
					'200': '#E2DCCA',
					'300': '#CCC2A3',
					'400': '#B9A97F',
					'500': '#B59F78',
					'600': '#947151',
					'700': '#8A644C',
					'800': '#704E3D',
					'900': '#4F3A2B',
				},
				navy: {
					'100': '#CEDAF2',
					'200': '#95BEE4',
					'300': '#6FA6E2',
					'400': '#628CDF',
					'500': '#4150BE',
					'600': '#3741A0',
					'700': '#2F2B7D',
					'800': '#1E2357',
					'900': '#121C35',
				},
				cgray: {
					'100': '#DDE7E9',
					'200': '#B8C8CC',
					'300': '#879DA1',
					'400': '#5A6E72',
					'500': '#3D4F52',
				},
				wgray: {
					'100': '#E9E5DD',
					'200': '#CCC4B8',
					'300': '#A19887',
					'400': '#6D6555',
					'500': '#524B3D',
				},
				gold: {
					'100': '#fff7e6',
					'200': '#fff6c2',
					'300': '#f9e19f',
					'400': '#fcd173',
					'500': '#fcaf08',
					'600': '#de9c12',
					'700': '#b47d08',
					'800': '#825e12',
					'900': '#412d01',
				}
			},
			height: {
				'1/10': '10%',
				'2/10': '20%',
				'3/10': '30%',
				'4/10': '40%',
				'5/10': '50%',
				'6/10': '60%',
				'7/10': '70%',
				'8/10': '80%',
				'9/10': '90%',
				'full-vh': '100vh',
			},
			width: {
				'1/10': '10%',
				'2/10': '20%',
				'3/10': '30%',
				'4/10': '40%',
				'5/10': '50%',
				'6/10': '60%',
				'7/10': '70%',
				'8/10': '80%',
				'9/10': '90%',
				'1/7': '14.28%',
				'2/7': '28.57%',
				'3/7': '42.86%',
				'4/7': '57.14%',
				'5/7': '71.43%',
				'6/7': '85.71%',
			},
			maxWidth: {
				'inherit': 'inherit',
			},
		}
	},

	plugins: [typography]
} satisfies Config;
