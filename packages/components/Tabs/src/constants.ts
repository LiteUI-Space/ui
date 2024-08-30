import type { ComputedRef, InjectionKey } from 'vue'

interface TabsContext {
  model: ComputedRef<string | number>
  update: () => void
}
export const TabsKey: InjectionKey<TabsContext> = Symbol('tabsKey')
