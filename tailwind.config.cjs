/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		screens: {
			'sm': "360px",
			'md': "420px",
			'lg': "768px",
			'xl': "980px",
			'2xl': "1024px",
			'3xl': "1080px",
			'4xl': "1336px",
		},
		container: {
      center: true,
			padding: '1rem',
			screens: {
        'sm': '360px',
        'md': '420px',
        'lg': '768px',
        'xl': '980px',
        '2xl': '1024px',
        '3xl': '1080px',
        '4xl': '1336px',
      },
    },
		fontFamily: {
			sans: ['Inter, sans-serif'],
		},
		extend: {
			colors: {
				primary: '#03AC0E',
				second: '#FF7F17',
			},
			fontSize: {
				'7xl': ['80px', {
					lineHeight: '96px',
					letterSpacing: '-0.01em',
					fontWeight: '500',
				}],
				'6xl': ['64px', {
					lineHeight: '83.2px',
					letterSpacing: '-0.01em',
					fontWeight: '700',
				}],
				'5xl': ['40px', {
					lineHeight: '45px',
					letterSpacing: '-0.01em',
					fontWeight: '700',
				}],
				'2xl': ['28px', {
					lineHeight: '30px',
					letterSpacing: '-0.02em',
					fontWeight: '400',
				}],
				'xl': ['20px', {
					lineHeight: '30px',
					letterSpacing: '-0.02em',
					fontWeight: '400',
				}],
				'sm' : ['14px', {
					lineHeight: '22px',
					letterSpacing: '-0.02em',
					fontWeight: '400',
				}],
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
