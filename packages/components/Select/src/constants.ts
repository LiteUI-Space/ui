import type { SelectOptionProps } from './types'
import type { ComputedRef, InjectionKey } from 'vue'

export interface SelectContext {
  model: ComputedRef<SelectOptionProps['value']>
}
export const selectKey: InjectionKey<SelectContext> = Symbol('selectKey')
