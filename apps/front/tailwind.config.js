import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#052814", // or 50 to 900 DEFAULT
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
          // ... rest of the colors
        },
        // "green-dark": {
        //   extend: "dark", // <- inherit default values from dark theme
        //   colors: {
        //     background: "#052814",
        //     foreground: "#ffffff",
        //   },
        //   layout: {
        //     disabledOpacity: "0.3",
        //     radius: {
        //       small: "4px",
        //       medium: "6px",
        //       large: "8px",
        //     },
        //     borderWidth: {
        //       small: "1px",
        //       medium: "2px",
        //       large: "3px",
        //     },
        //   },
        // },
      }
    })
  ],
}
