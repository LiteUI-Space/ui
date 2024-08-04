export interface LtInputProps {
  placeholder: string
  prefix: string
  suffix: string
  addonBefore: string
  addonAfter: string
  disabled: boolean
  password: boolean
}

export type InputProps = Partial<LtInputProps>

export type InputInstance = InstanceType<typeof import('./Input.vue')['default']>
export type InputPasswordInstance = InstanceType<typeof import('./InputPassword.vue')['default']>
