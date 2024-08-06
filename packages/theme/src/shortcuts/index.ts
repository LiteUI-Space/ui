import { common } from './src/common'
import { Button } from './src/button'
import { InputShortcuts as Input } from './src/Input'

export const shortcuts = [
  common,
  Button,
  Input
]

/**
 *  Generate safelist from shortcuts
 *  @see https://unocss.dev/guide/extracting#safelist
 */
export function generateSafelist() {
  return shortcuts.map(cls => Object.keys(cls)).flat()
}
