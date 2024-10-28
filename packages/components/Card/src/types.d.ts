interface LtCardProps {
  ui: {
    base: string
    header: string
    body: string
    footer: string
  }
  title: string
}

export type CardProps = Partial<LtCardProps>
export type CardInstance = InstanceType<typeof import('./Card.vue')['default']>
