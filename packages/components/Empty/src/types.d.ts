interface LtEmptyProps {
  description: string
  image: string
  imageClass: string
}

export type EmptyProps = Partial<LtEmptyProps>
export type EmptyInstance = InstanceType<typeof import('./Empty.vue')['default']>
