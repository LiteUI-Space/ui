interface LtCheckboxProps {
  indeterminate: boolean
  disabled: boolean
  readonly: boolean
}

export interface CheckboxGroupOptions {
  label: string | number
  value: string | number
  disabled?: boolean
  readonly?: boolean
}

interface LtCheckboxGroupProps {
  options: string[] | number[] | CheckboxGroupOptions[]
  disabled?: boolean
}

export type CheckboxProps = Partial<LtCheckboxProps>
export type CheckboxGroupProps = LtCheckboxGroupProps
export type CheckboxInstance = InstanceType<typeof import('./Checkbox.vue')['default']>
export type CheckboxGroupInstance = InstanceType<typeof import('./CheckboxGroup.vue')['default']>
