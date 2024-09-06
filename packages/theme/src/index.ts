import { rules } from './rules'
import { definePreset } from 'unocss'
import { generateSafelist, shortcuts } from './shortcuts';

export const presetLite = definePreset(() => {
  return {
    name: '@lite-space/theme',
    shortcuts,
    safelist: generateSafelist(),
    rules
  }
})
