export type RadioBasicValue = string | number

interface LtRadioProps {
  disabled: boolean
  value: RadioBasicValue
}

export interface RadioGroupOptions {
  label: RadioBasicValue
  value: RadioBasicValue
  disabled?: boolean
}
interface LtRadioGroupProps {
  options: string[] | number[] | RadioGroupOptions[]
  disabled: boolean
}

export type RadioChangeEvent = RadioBasicValue | boolean
export type RadioGroupChangeEvent = RadioBasicValue

export type RadioProps = Partial<LtRadioProps>
export type RadioGroupProps = Partial<LtRadioGroupProps>
export type RadioInstance = InstanceType<typeof import('./Radio.vue')['default']>
export type RadioGroupInstance = InstanceType<typeof import('./RadioGroup.vue')['default']>
