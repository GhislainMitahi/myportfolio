module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '1.5rem',
      '3lg': '10rem',
      'full': '9999px',
      'large': '12px',
    },
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'project-one': "url('/src/assets/images/todo.PNG')",
        'project-two': "url('/src/assets/images/dashbord.PNG')",
        'project-three': "url('/src/assets/images/dashbord.PNG')",
      },
      spacing: {
        '3px': '758px',
      },
      colors:{
        primary: "#ff4800",
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum':'#ff77e9',
        'bermuda': '#78dcca',
         blue: {
          450: "#0f172a"
        },
      },
    },
  },
  plugins: [],
}
