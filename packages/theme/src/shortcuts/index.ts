import { Space } from './Space'
import { common } from './common'
import { Button } from './Button'
import { Switch } from './Switch'
import { Divider } from './Divider'
import { InputShortcuts as Input } from './Input'
import { RadioShortcuts as Radio } from './Radio'
import { CheckboxShortcuts as Checkbox } from './Checkbox'

export const shortcuts = [
  common,
  Button,
  Input,
  Switch,
  Divider,
  Space,
  Checkbox,
  Radio
]

/**
 *  Generate safelist from shortcuts
 *  @see https://unocss.dev/guide/extracting#safelist
 */
export function generateSafelist() {
  return shortcuts.map(cls => Object.keys(cls)).flat()
}
