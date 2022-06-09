module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#1797ff',
      home: '#fcfcfc'
    },
    extend: {
      boxShadow: {
        'title': '0 1px 4px 0 rgba(0, 21, 41, 0.12)'
      },
      backgroundImage: {
        'title': 'linear-gradient(to bottom, #ececec -32%, #fff 124%)'
      }
    },
  },
  plugins: [],
}
