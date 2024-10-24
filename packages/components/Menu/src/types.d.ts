type MenuBasicValue = string | number
interface LtMenuProps {
  open: boolean
  offset: number
}

interface LtMenuItemProps {
  value: MenuBasicValue
  title: string
  icon: string
  open: boolean
  popper: boolean
  disabled: boolean
  offset: number
}

export type MenuProps = Partial<LtMenuProps>
export type MenuInstance = InstanceType<typeof import('./Menu.vue')['default']>

export type MenuItemProps = Partial<LtMenuItemProps>
export type MenuItemInstance = InstanceType<typeof import('./MenuItem.vue')['default']>
