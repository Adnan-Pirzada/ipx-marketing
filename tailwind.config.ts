import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1F',
        surface: '#131824',
        elevated: '#1A1F2E',
        secondary: '#00C2FF',
        accent: '#4B4B4B',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0AEC0',
        'text-tertiary': '#718096',
      },
      fontFamily: {
        primary: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'h1': '4rem',
        'h2': '3rem',
        'h3': '2.25rem',
        'h4': '1.875rem',
        'h5': '1.5rem',
        'h6': '1.25rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 194, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 194, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 194, 255, 0.5)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'dataFlow': 'dataFlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 194, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 194, 255, 0.6)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

export default config
