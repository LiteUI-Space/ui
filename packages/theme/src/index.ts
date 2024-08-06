import { definePreset } from 'unocss'
import { generateSafelist, shortcuts } from './shortcuts'

interface ThemeOptions {

}
export const presetLite = definePreset((options?: ThemeOptions) => {
  return {
    name: '@lite-ui/theme',
    shortcuts,
    safelist: generateSafelist()
  }
})
