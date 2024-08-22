import type { RadioBasicValue } from './types'
import type { ComputedRef, InjectionKey } from 'vue'

export interface RadioGroupContext {
  onChange: (value: RadioBasicValue) => void
  model: ComputedRef<RadioBasicValue>
}
export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupKey')
