// uno.config.ts
import { presetLite } from '@lite-ui/theme'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetLite()
  ]
})
