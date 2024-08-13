import { rules } from './rules'
import { definePreset } from 'unocss'
import { generateSafelist, shortcuts } from './shortcuts'

export const presetLite = definePreset(() => {
  return {
    name: '@lite-ui/theme',
    shortcuts,
    safelist: generateSafelist(),
    rules
  }
})
