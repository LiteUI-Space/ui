import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from './types'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> = Symbol('breadcrumbKey')
