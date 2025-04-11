import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: '#e2d1c3',
  				foreground: '#4a3f35'
  			},
  			secondary: {
  				DEFAULT: '#fdfcfb',
  				foreground: '#4a3f35'
  			},
  			muted: {
  				DEFAULT: '#f5f5f5',
  				foreground: '#8b7355'
  			},
  			accent: {
  				DEFAULT: '#eacda3',
  				foreground: '#4a3f35'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			serif: [
  				'PlayFair Display',
  				'serif'
  			]
  		},
  		keyframes: {
  			'fade-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'fade-up': 'fade-up 0.5s ease-out',
  			'fade-in': 'fade-in 0.3s ease-out'
  		},
  		backgroundImage: {
  			'grid-pattern': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
  			'grid-pattern-light': 'linear-gradient(to right, #f8fafc 1px, transparent 1px), linear-gradient(to bottom, #f8fafc 1px, transparent 1px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
