module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        80: '80vh',
        60: '60vh',
      },
      colors: {
        greenColor: '#00985B',
        bgColor: '#D7FCED',
      },
      backgroundImage: {
        temukanBackground: "url('/src/Asset/img/img-temukan.png')",
        konsultasiBackground: "url('/src/Asset/img/bg-konsultasi.png')",
      },
    },
  },
  plugins: [],
};
