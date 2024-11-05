import type { ComputedRef, InjectionKey } from 'vue'

export interface AnchorContext {
  model: ComputedRef<string>
  onChange: (val: string) => void
  addLink: (href: string) => void
}
export const anchorKey: InjectionKey<AnchorContext> = Symbol('anchorKey')
