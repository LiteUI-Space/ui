import { common } from './common'
import { Button } from './Button'
import { Switch } from './Switch'
import { InputShortcuts as Input } from './Input'

export const shortcuts = [
  common,
  Button,
  Input,
  Switch
]

/**
 *  Generate safelist from shortcuts
 *  @see https://unocss.dev/guide/extracting#safelist
 */
export function generateSafelist() {
  return shortcuts.map(cls => Object.keys(cls)).flat()
}
