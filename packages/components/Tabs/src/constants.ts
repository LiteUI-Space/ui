import type { TabItem } from './types'
import type { ComputedRef, InjectionKey } from 'vue'

interface TabsContext {
  model: ComputedRef<string | number>
  lazy: ComputedRef<boolean>
  update: (item: TabItem) => void
}
export const TabsKey: InjectionKey<TabsContext> = Symbol('tabsKey')
