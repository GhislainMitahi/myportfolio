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
    transformOrigin: {
      'top-left-1/3-3/4': '33% 75%',
      'transform': 'translate(-50%, -50%)'
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
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'project-one': "url('/src/assets/images/todo.PNG')",
        'project-two': "url('/src/assets/images/dashbord.PNG')",
        'project-three': "url('/src/assets/images/dashbord.PNG')",
      },
      spacing: {
        '3px': '758px',
        '10':'10%',
        'p25':'25%',
        '50':'50%',
        '95':'100%'
      },
      colors:{
        // primary: "#ff4800",
        primary: "#373963",
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'grayb':'#d1d1d6',
        'myred':'#633739',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum':'#ff77e9',
        'bermuda': '#78dcca',
        'red':'#c00000',
         blue: {
          450: "#0f172a"
        },
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
        'gh': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
