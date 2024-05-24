/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'border-secondary': 'var(--border-secondary)',
        'text-secondary': 'var(--text-secondary)',
        'background-secondary': 'var(--background-secondary)',
        'accent-light': 'var(--accentLight)',
        'accent-bright': 'var(--accentBright)',
        'accent-primary': 'var(--accentPrimary)',
        'accent-dim': 'var(--accentDim)',
        'accent-active': 'var(--accentActive)',
        accent: 'var(--accent)',
        'background-primary': 'var(--backgroundPrimary)',
        background: 'var(--background)',
        'text-primary': 'var(--textPrimary)',
        text: 'var(--text)',
        'text-tertiary': 'var(--textTertiary)',
        'text-accent': 'var(--textAccent)',
        'border-primary': 'var(--borderPrimary)',
        borderPrimary: 'var(--borderPrimary)',
        'border-tetrary': 'var(--borderTetrary)',
        borderTetrary: 'var(--borderTetrary)',
        border: 'var(--border)',
        'additional-border': 'var(--additionalBorder)',
        gradientOrange: 'var(--gradient-orange)',
      },
    },
  },
  plugins: [],
}
