import type { PropertyKey, VNode } from 'vue'

interface LtTabsProps {
  align: 'left' | 'center' | 'right'
  lazy: boolean
}
interface LtTabPaneProps {
  name: string
  disabled: boolean
  lazy: boolean
}
export type TabsProps = Partial<LtTabsProps>
export type TabsInstance = InstanceType<typeof import('./Tabs.vue')['default']>

export type TabPaneProps = Partial<LtTabPaneProps>
export type TabPaneInstance = InstanceType<typeof import('./TabPane.vue')['default']>

export interface TabItem extends TabPaneProps {
  key: PropertyKey
  slot: () => VNode
}

interface SlotRenderProps {
  item: TabItem
}
