interface LtDividerProps {
  dashed: boolean
  type: 'horizontal' | 'vertical'
  orientation: 'left' | 'right' | 'center'
  margin: string | number
}

export type DividerProps = Partial<LtDividerProps>
export type DividerInstance = InstanceType<typeof import('./Divider.vue')['default']>
