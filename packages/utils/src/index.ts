import { ICON_PREFIX } from './constant'

export function isUnoIcon(str?: string) {
  if (!str)
    return false
  return str.startsWith(ICON_PREFIX)
}
