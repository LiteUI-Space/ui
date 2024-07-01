// https://unocss.dev/integrations/vite
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'py-1 px-4 disabled:(bg-gray-600 opacity-50) bg-cyan-500 hover:bg-cyan-600 text-white rounded'],
    ['icon-btn', 'hover:bg-cyan-600 transition cursor-pointer select-none']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
