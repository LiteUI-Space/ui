import { BreadcrumbShortcuts as Breadcrumb } from './Breadcrumb';
import { Button } from './Button'
import { Card } from './Card'
import { CheckboxShortcuts as Checkbox } from './Checkbox'
import { common } from './common'
import { Divider } from './Divider'
import { Empty } from './Empty'
import { Icon } from './Icon'
import { InputShortcuts as Input } from './Input'
import { MenuShortcuts as Menu } from './Menu'
import { RadioShortcuts as Radio } from './Radio'
import { Space } from './Space'
import { Switch } from './Switch'
import { Tabs } from './Tabs'
import { Tag } from './Tag'
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
  Empty,
  Menu,
  Icon
]

/**
 *  Generate safelist from shortcuts
 *  @see https://unocss.dev/guide/extracting#safelist
 */
export function generateSafelist() {
  return shortcuts.map(cls => Object.keys(cls)).flat()
}
