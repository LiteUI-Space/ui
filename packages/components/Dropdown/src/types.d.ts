import type { MenuItemProps } from '@lite-space/menu'
import type { PopoverProps } from '@lite-space/popover'

interface LtDropdownProps extends PopoverProps {

}

interface LtDropdownItemProps extends Omit<MenuItemProps, 'popper'> {
  divider: boolean
}

export type DropdownProps = Partial<LtDropdownProps>
export type DropdownInstance = InstanceType<typeof import('./Dropdown.vue')['default']>

export type DropdownItemProps = Partial<LtDropdownItemProps>
export type DropdownItemInstance = InstanceType<typeof import('./DropdownItem.vue')['default']>
