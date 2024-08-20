import { ICON_PREFIX } from './constant'

export type * from './types'

export function isUnoIcon(str?: string) {
  if (!str)
    return false
  return str.startsWith(ICON_PREFIX)
}

export function isObject(obj: any): obj is object {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
