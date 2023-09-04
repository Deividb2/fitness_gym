/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        'tamanhoH': '12vh',
        'tamanhoC': '76vh',
        'tamanhoCardTreino': '22rem',
        '70vh': '70vh',
        '40vw': '40vw',
        'larguraCard': '285px',
        'alturaImgCard': '170px',
        'alturaBanner': '105vh',
        'whatsapp': '60px'
      },
      colors: {
        'vermelho': '#f5024f',
        'whatsapp': '#25D366',
        'marrom': '#534B4F',
        preto: {
          100: '#000',
          200: 'rgba(0,0,0, 0.5)',
          300: '#707070', 
          400: '#232323',
          500: '#333333'
        },
        branco: {
          100: '#FFF',
          200: '#C2CBDB',
          300: '#DFDFDF'
        },
        amarelo: {
          100: '#FFAD32',
          200: '#FFCF00'
        },
        azul: {
          100: '#1C293B',
          200: '#567192'
        },
        laranja: {
          100: '#883C04'
        }
      },
      backgroundImage: {
        'imgFundo': "url('./public/assets/imgs/academiaFundo.jpg')",
        'imgBanner': "url('./public/assets/imgs/banner.png')",

        'imgMusculacao': "url('./public/assets/imgs/musculacao.jpg')",
        'imgCardio': "url('./public/assets/imgs/cardio.jpg')",
        'imgBoxe': "url('./public/assets/imgs/boxe.jpg')",
        'imgGinastica': "url('./public/assets/imgs/ginastica.jpg')",
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
        'oswald': 'Oswald, sans-serif',
        'raleway': 'Raleway, sans-serif',
        'ruwudu': 'Ruwudu, serif'
      }
    },
  },
  plugins: [],
}

