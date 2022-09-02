module.exports = {
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.js'],
  theme: {
    extend: {
      colors: {
        ttl: '#3e1856',
        ttlFont: '#f5b829',
        primary: '#ad0000',
        secondary: '#f5b829',
        tertiary: '#f5b829',
      },
      fontFamily: {
        ttl: ['Coolvetica', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: !process.env.NODE_ENV !== 'production',
  },
}
