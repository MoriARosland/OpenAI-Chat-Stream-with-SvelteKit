/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        emojiSpinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        emojiSpinner: 'emojiSpinner 1s ease-in-out infinite',
      }
    },
  },
  plugins: [require('daisyui')],
}

