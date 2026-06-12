/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08091A',
        card: '#0F1629',
        cyan: '#00D4FF',
        purple: '#7C6FFF',
        text: '#E8EEFF',
        muted: '#7A85AA',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        pulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.5)' },
          '50%': { boxShadow: '0 0 0 6px rgba(34,197,94,0)' },
        },
        avatarFloat: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        skillSlideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        containerFade: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInQuote: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse 2.5s ease-in-out infinite',
        'avatar-float': 'avatarFloat 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.4s ease forwards',
        'skill-slide': 'skillSlideIn 0.5s ease forwards',
        'container-fade': 'containerFade 0.6s ease',
        'quote-fade': 'fadeInQuote 0.8s ease 0.5s both',
      },
    },
  },
  plugins: [],
}
