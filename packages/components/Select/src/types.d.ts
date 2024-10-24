import type { DropdownItemProps } from '@lite-space/dropdown'

interface LtSelectProps {
  suffix: string
  size: LtComponentSize
  placeholder: string
  clearable: boolean
}

interface LtSelectOptionProps extends DropdownItemProps {

}

export type SelectProps = Partial<LtSelectProps>
export type SelectInstance = InstanceType<typeof import('./Select.vue')['default']>

export type SelectOptionProps = Partial<LtSelectOptionProps>
export type SelectOptionInstance = InstanceType<typeof import('./SelectOption.vue')['default']>
