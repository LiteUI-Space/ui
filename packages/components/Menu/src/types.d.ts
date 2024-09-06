type MenuBasicValue = string | nulber
interface LtMenuProps {
  open: boolean
}

interface LtMenuItemProps {
  value: MenuBasicValue
  title: string
  icon: string
  open: boolean
}

export type MenuProps = Partial<LtMenuProps>
export type MenuInstance = InstanceType<typeof import('./Menu.vue')['default']>

export type MenuItemProps = Partial<LtMenuItemProps>
export type MenuItemInstance = InstanceType<typeof import('./MenuItem.vue')['default']>
