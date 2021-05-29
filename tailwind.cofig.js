module.exports = {
    theme: {
      pink: '#F21B91',
      blue: '#0A7ABF',
      green: '#41BF49',
      orange: '#F28322',
      red: '#F22233',
    },
    variants: {},
    plugins: [],
    purge: {
      content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`,
      ],
    },
  }
  