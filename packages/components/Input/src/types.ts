import type { Input } from '.'

export interface InputProps {
  placeholder?: string
  prefix?: string
  suffix?: string
  addonBefore?: string
  addonAfter?: string
  disabled?: boolean
  password?: boolean
}

export type ButtonInstance = InstanceType<typeof Input>
