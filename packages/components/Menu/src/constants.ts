import type { InjectionKey, Ref } from 'vue'
import type { MenuBasicValue, MenuProps } from './types'

export interface MenuKeyContext {
  model: Readonly<Ref<MenuBasicValue>>
  props: MenuProps
  onChange: (val: MenuBasicValue) => void
}
export const menuKey: InjectionKey<MenuKeyContext> = Symbol('menuKey')
