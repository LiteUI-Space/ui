import { ICON_PREFIX } from './constant'

export type * from './types'

export function isUnoIcon(strOrNum?: string | boolean) {
  if (!strOrNum)
    return false
  return strOrNum.startsWith(ICON_PREFIX)
}

export function isObject(obj: any): obj is object {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
