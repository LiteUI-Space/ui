import type { MaybeRef } from 'vue'

interface LtAffixProps {
  offsetTop: number
  zIndex: number
  target: MaybeRef<HTMLElement> | null
}

export type AffixProps = Partial<LtAffixProps>
export type AffixInstance = InstanceType<typeof import('./Affix.vue')['default']>
