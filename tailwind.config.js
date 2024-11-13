/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      BF: '#7BA4BD',
      BC: '#A5D0EA',
      NG: '#000000',
      BL: '#FFFFFF',
      RJ: '#FF0000',
      GR: '#D9D9D9',
      VR: '#008f39',
      RF: '#ff0080',
      BM: '#000080',
      AM: '#e5be01',
      NA: '#ff8000',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
