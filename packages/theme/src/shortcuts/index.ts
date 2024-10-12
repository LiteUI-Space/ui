import { Tag } from './Tag'
import { Card } from './Card'
import { Icon } from './Icon'
import { Tabs } from './Tabs'
import { Empty } from './Empty'
import { Space } from './Space'
import { Badge } from './Badge'
import { Button } from './Button'
import { common } from './common'
import { Switch } from './Switch'
import { Divider } from './Divider'
import { Popover } from './Popover'
import { Tooltip } from './Tooltip'
import { Popconfirm } from './Popconfirm'
import { MenuShortcuts as Menu } from './Menu'
import { InputShortcuts as Input } from './Input'
import { RadioShortcuts as Radio } from './Radio'
import { AvatarShortcuts as Avatar } from './Avatar'
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
  Empty,
  Menu,
  Icon,
  Badge,
  Avatar,
  Popover,
  Tooltip,
  Popconfirm
]

/**
 *  Generate safelist from shortcuts
 *  @see https://unocss.dev/guide/extracting#safelist
 */
export function generateSafelist() {
  return shortcuts.map(cls => Object.keys(cls)).flat()
}
