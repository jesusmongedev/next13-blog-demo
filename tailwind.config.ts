import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0571F8',
        secondary: '#0E2431'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio')
  ]
}
export default config
