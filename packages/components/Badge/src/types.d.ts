interface LtBadgeProps {
  value: number | string
  max: number
  dot: boolean
  offset: [number, number]
  showZero: boolean
}

export type BadgeProps = Partial<LtBadgeProps>
export type BadgeInstance = InstanceType<typeof import('./Badge.vue')['default']>
