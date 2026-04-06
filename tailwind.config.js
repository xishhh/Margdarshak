/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3e5f7e',
        'primary-container': '#577798',
        'primary-fixed': '#cfe5ff',
        'primary-fixed-dim': '#a9caee',
        secondary: '#496455',
        'secondary-container': '#cbead6',
        'secondary-fixed': '#cbead6',
        tertiary: '#555e5f',
        'tertiary-container': '#6d7677',
        'tertiary-fixed': '#dbe4e5',
        surface: '#f9f9ff',
        'surface-bright': '#f9f9ff',
        'surface-container': '#e8edff',
        'surface-container-low': '#f1f3ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#e0e8ff',
        'surface-container-highest': '#d7e2ff',
        'surface-variant': '#d7e2ff',
        'on-surface': '#101b30',
        'on-surface-variant': '#41484d',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        outline: '#71787e',
        'outline-variant': '#c1c7cd',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a'
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      borderRadius: {
        lg: '2rem',
        xl: '3rem'
      },
      boxShadow: {
        ambient: '0 20px 40px rgba(16, 27, 48, 0.06)'
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(207,229,255,0.85), transparent 50%), radial-gradient(circle at bottom right, rgba(203,234,214,0.55), transparent 42%)',
        'cta-gradient': 'linear-gradient(135deg, #3e5f7e 0%, #577798 100%)'
      }
    }
  },
  plugins: []
};
