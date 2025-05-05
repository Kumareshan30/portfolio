module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
    './types/**/*.d.ts'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        background: '#0a192f',
        surface: '#112240',
        accent: '#8892b0',
        alternative: 'white'
      }
    }
  },
  plugins: []
};
