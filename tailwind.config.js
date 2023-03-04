/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
const addVariablesForColors = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    screens: {
      minscreen: "340px",
      xs: "460px",
      xs2: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        red: "0px 4px 12px 0 rgba(174, 9, 9, 0.3)",
        orange: "0px 4px 12px 0 rgba(229, 141, 8, 0.3)",
      },
      fontSize: {
        xs2: "0.6rem",
      },
      colors: {
        textGray: "#292929",
        "text-primary": "#393939",
        textWhite: "#f3f2f0",
        casualRed: "#FF695A",
        casualOrange: "#FFA033",
        casualGreen: "#42D68C",
        casualAqua: "#08CAD1",
        casualSkyBlue: "#59ADF6",
        casualSlateBlue: "#97B8FC",
        casualViolet: "#C780E8",
        casualPink: "#F07DD7",
        casualRedDarker: "#B92F27",
        casualOrangeDarker: "#C76A2A",
        casualGreenDarker: "#30A46A",
        casualAquaDarker: "#05989D",
        casualSkyBlueDarker: "#2A85D4",
        casualSlateBlueDarker: "#728ABC",
        casualVioletDarker: "#9756B5",
        casualPinkDarker: "#CC41AE",
        casualRedOutline: "#fcaaa1",
        casualOrangeOutline: "#FFC684",
        casualGreenOutline: "#79E2AE",
        casualAquaOutline: "#26E2E9",
        casualSkyBlueOutline: "#6DB7F8",
        casualSlateBlueOutline: "#AAC6FF",
        casualVioletOutline: "#E2A5FF",
        casualPinkOutline: "#FFA8EC",
        darkOutline: "#78808c",
        lightOutline: "#eef2f6",
        blueOutline: "#6585DF",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
      animation: {
        "spin-slow": "spin-backwards 40s linear infinite",
      },
      keyframes: {
        "spin-backwards": {
          to: { transform: "rotate(-360deg)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
    // fontFamily: {
    //   sans: ["Rubik", "sans-serif"],
    //   sans: ["var(--font-rubik)", ...fontFamily.sans],
    //   varela: ["Varela Round", "sans-serif"],
    //   baloo: ["baloo-2", "cursive"],
    //   quicksand: ["Quicksand", "sans-serif"],
    //   catamaran: ["Catamaran", "sans-serif"],
    // },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    linearBorderGradients: () => ({
      colors: {
        "light-green": [colors.emerald[500], colors.green[500], colors.lime[500]],
        "light-blue": [colors.teal[500], colors.emerald[500], colors.green[500]],
        purple: [colors.blue[500], colors.pink[500], colors.purple[500]],
        gray: [colors.gray[300], colors.slate[100], colors.gray[300]],
      },
      background: {
        white: "#fff",
      },
    }),
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animate"),
    require("tailwindcss-border-gradient-radius"),
    addVariablesForColors,
  ],
};
