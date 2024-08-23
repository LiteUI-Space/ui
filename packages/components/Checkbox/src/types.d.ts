export type CheckboxBasicValue = string | number
interface LtCheckboxProps {
  indeterminate: boolean
  disabled: boolean
  readonly: boolean
  value: CheckboxBasicValue
}

export interface CheckboxGroupOptions {
  label: CheckboxBasicValue
  value: CheckboxBasicValue
  disabled?: boolean
  readonly?: boolean
}

interface LtCheckboxGroupProps {
  options: string[] | number[] | CheckboxGroupOptions[]
  disabled?: boolean
}

export type CheckboxProps = Partial<LtCheckboxProps>
export type CheckboxInstance = InstanceType<typeof import('./Checkbox.vue')['default']>

export type CheckboxGroupProps = Partial<LtCheckboxGroupProps>
export type CheckboxGroupInstance = InstanceType<typeof import('./CheckboxGroup.vue')['default']>
export type CheckboxGroupChangeEvent = (CheckboxBasicValue)[]
