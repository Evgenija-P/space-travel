/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'prime-color': '#fff',
        'accent-red': '#cb0e0e',
        'accent-blue': '#036cca',
      },
      fontFamily: {
        basic: ['sf-pro-display'],
        space: ['spaceagecyrillic'],
      },
      backgroundImage: {
        header: "url('/src/images/header_bg.jpg')",
        info: "url('/src/images/about_bg.jpg')",
        process: "url('/src/images/how-to_bg.jpg')",
        reserve: "url('/src/images/reserve_bg.jpg')",
        offers: "url('/src/images/info_bg.jpg')",
        footer: "url('/src/images/footer_bg.png')",
      },
    },
    plugins: [],
  },
};
