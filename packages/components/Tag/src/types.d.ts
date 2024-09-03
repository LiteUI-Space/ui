interface LtTagProps {
  bordered: boolean
  closeIcon: boolean | string
  icon: string
}

export type TagProps = Partial<LtTagProps>
export type TagInstance = InstanceType<typeof import('./Tag.vue')['default']>
