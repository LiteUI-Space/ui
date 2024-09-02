import { Tag } from './Tag'
import { Tabs } from './Tabs'
import { Card } from './Card'
import { Space } from './Space'
import { Empty } from './Empty'
import { common } from './common'
import { Button } from './Button'
import { Switch } from './Switch'
import { Divider } from './Divider'
import { InputShortcuts as Input } from './Input'
import { RadioShortcuts as Radio } from './Radio'
import { CheckboxShortcuts as Checkbox } from './Checkbox'
import { BreadcrumbShortcuts as Breadcrumb } from './Breadcrumb'

export const shortcuts = [
  common,
  Button,
  Input,
  Switch,
  Divider,
  Space,
  Checkbox,
  Radio,
  Tag,
  Breadcrumb,
  Tabs,
  Card,
  Empty
]

/**
 *  Generate safelist from shortcuts
 *  @see https://unocss.dev/guide/extracting#safelist
 */
export function generateSafelist() {
  return shortcuts.map(cls => Object.keys(cls)).flat()
}
