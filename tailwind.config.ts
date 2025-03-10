
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				"got-green": "#1FAB89",
				"got-red": "#D83333",
				"got-orange": "#FF5E3A",
				"got-yellow": "#F5A623",
				"got-dark": "#1A1A1A",
				"got-light": "#E5E5E5",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'fade-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.9' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'wave': {
                    '0%': { transform: 'scaleY(1)' },
                    '50%': { transform: 'scaleY(0.8)' },
                    '100%': { transform: 'scaleY(1)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-out',
                'fade-in-delay-100': 'fade-in 0.8s ease-out 0.1s forwards',
                'fade-in-delay-200': 'fade-in 0.8s ease-out 0.2s forwards',
                'fade-in-delay-300': 'fade-in 0.8s ease-out 0.3s forwards',
                'fade-in-delay-400': 'fade-in 0.8s ease-out 0.4s forwards',
                'fade-in-right': 'fade-in-right 0.8s ease-out',
                'fade-in-left': 'fade-in-left 0.8s ease-out',
                'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out',
                'float': 'float 6s infinite ease-in-out',
                'wave-1': 'wave 1.2s infinite ease-in-out',
                'wave-2': 'wave 1.2s infinite ease-in-out 0.2s',
                'wave-3': 'wave 1.2s infinite ease-in-out 0.4s',
			},
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Space Grotesk', 'sans-serif'],
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
