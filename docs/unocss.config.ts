// https://unocss.dev/integrations/vite
import { presetLite } from '@lite-ui/theme'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetLite()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
