import type { ComputedRef, InjectionKey } from 'vue'
import type { CheckboxBasicValue, CheckboxGroupChangeEvent } from './types'

export interface CheckboxGroupContext {
  onChange: (value: CheckboxBasicValue, val: boolean) => void
  model: ComputedRef<CheckboxGroupChangeEvent>
}
export const CheckboxGroupKey: InjectionKey<CheckboxGroupContext> = Symbol('CheckboxGroupKey')
