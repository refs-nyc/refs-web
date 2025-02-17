import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
	theme: {
		extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#7f70b8',
          100: '#7f70b8',
          200: '#7f70b8',
          300: '#7f70b8',
          400: '#7f70b8',
          500: '#7f70b8',
          600: '#7f70b8',
          700: '#7f70b8',
          800: '#7f70b8',
          900: '#7f70b8'
        },
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
      }
    }
	},

	plugins: [flowbitePlugin]
} as Config;