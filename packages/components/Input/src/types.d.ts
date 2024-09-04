import type { LtComponentSize } from '@lite-space/utils'

export interface LtInputProps {
  placeholder: string
  prefix: string
  suffix: string
  addonBefore: string
  addonAfter: string
  disabled: boolean
  password: boolean
  clearable: boolean
  size: LtComponentSize
}

export interface LtTextAreaProps extends Pick<LtInputProps, 'placeholder' | 'disabled' | 'clearable' | 'size'> {
  /**
   * TODO: clearable
   * @type {boolean}
   * @default false
   * @see https://ant-design.antgroup.com/components/input-cn#components-input-demo-allowclear
   */
  clearable: boolean
  /**
   * TODO: autoSize
   * @type {boolean|object}
   * @default false
   * @see https://github.com/element-plus/element-plus/blob/4d45ac94001d5e53e41421cdcd2a0562a7e56352/packages/components/input/src/utils.ts#L65
   */
  autoSize: boolean
  resize: boolean
}

export type InputProps = Partial<LtInputProps>
export type InputPasswordProps = InputProps
export type TextAreaProps = Partial<LtTextAreaProps>

export type InputInstance = InstanceType<typeof import('./Input.vue')['default']>
export type InputPasswordInstance = InstanceType<typeof import('./InputPassword.vue')['default']>
export type TextAreaInstance = InstanceType<typeof import('./TextArea.vue')['default']>
