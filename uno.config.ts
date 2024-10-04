import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'container/small': 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  theme: {
    colors: {
      primary: '#156963',
      base: '#2C1500',
    },
    fontSize: {
      'sm': ['0.625rem', '1rem'],
      'sm0.5': '0.875rem',
      'base': ['1rem', '1.75rem'],
      '0.5xl': ['1.125rem', '2rem'],
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': ['2.5rem', '3.5rem'],
      '5xl': ['4.25rem', '5.188rem'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        montserrat: 'Montserrat:400,500,600,700',
        nunito: 'Nunito:700',
      },
    }),
  ],
})
