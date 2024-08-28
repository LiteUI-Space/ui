interface LtBreadcrumbProps {
  separator: string
  items: string[]
}

export type BreadcrumbProps = Partial<LtBreadcrumbProps>
export type BreadcrumbInstance = InstanceType<typeof import('./Breadcrumb.vue')['default']>
