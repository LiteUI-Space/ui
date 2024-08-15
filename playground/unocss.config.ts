// uno.config.ts
import { presetLite } from '@lite-ui/theme'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetLite()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
