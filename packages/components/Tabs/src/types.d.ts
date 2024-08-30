import type { PropertyKey, VNode } from 'vue'

interface LtTabsProps {

}
interface LtTabPaneProps {
  name?: string
  disabled?: boolean
}
export type TabsProps = Partial<LtTabsProps>
export type TabsInstance = InstanceType<typeof import('./Tabs.vue')['default']>

export type TabPaneProps = LtTabPaneProps
export type TabPaneInstance = InstanceType<typeof import('./TabPane.vue')['default']>

export interface TabItem extends TabPaneProps {
  key: PropertyKey
  slot: () => VNode
}

interface SlotRenderProps {
  item: TabItem
}
