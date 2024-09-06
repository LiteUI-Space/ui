import type { InjectionKey, Ref } from 'vue'
import type { MenuBasicValue } from './types'

export interface MenuKeyContext {
  model: Readonly<Ref<MenuBasicValue>>
  open: Readonly<Ref< boolean>>
  onChange: (val: MenuBasicValue) => void
}
export const menuKey: InjectionKey<MenuKeyContext> = Symbol('menuKey')
