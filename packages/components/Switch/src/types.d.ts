interface LtSwitchProps {
  checkedChildren: string
  unCheckedChildren: string
  disabled: boolean
}

export type SwitchProps = Partial<LtSwitchProps>
export type SwitchInstance = InstanceType<typeof import('./Switch.vue')['default']>
