interface LtSpaceProps {
  direction: 'horizontal' | 'vertical'
  size: LtComponentSize | number | [number, number]
  align: 'start' | 'center' | 'end' | 'baseline'
  wrap: boolean
}

export type SpaceProps = Partial<LtSpaceProps>
export type SpaceInstance = InstanceType<typeof import('./Space.vue')['default']>
