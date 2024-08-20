interface LtCheckboxProps {
  checked: boolean
  indeterminate: boolean
  disabled: boolean
}

export interface CheckboxGroupOptions {
  label: string | number
  value: string | number
  disabled?: boolean
}

interface LtCheckboxGroupProps {
  options: string[] | number[] | CheckboxGroupOptions[]
  disabled?: boolean
}

export type CheckboxProps = Partial<LtCheckboxProps>
export type CheckboxGroupProps = LtCheckboxGroupProps
export type CheckboxInstance = InstanceType<typeof import('./Checkbox.vue')['default']>
