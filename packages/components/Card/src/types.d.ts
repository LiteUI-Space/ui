interface LtCardProps {
  title: string
}

export type CardProps = Partial<LtCardProps>
export type CardInstance = InstanceType<typeof import('./Card.vue')['default']>
