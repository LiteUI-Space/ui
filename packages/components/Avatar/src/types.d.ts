import type { LtComponentSize } from '@lite-space/utils'

interface LtAvatarProps {
  icon: string
  src: string
  alt: string
  shape: 'circle' | 'square'
  size: LtComponentSize | number
}

interface LtAvatarGroupProps extends Pick<LtAvatarProps, 'shape' | 'size'> {

}

export type AvatarProps = Partial<LtAvatarProps>
export type AvatarInstance = InstanceType<typeof import('./Avatar.vue')['default']>

export type AvatarGroupProps = Partial<LtAvatarGroupProps>
export type AvatarGroupInstance = InstanceType<typeof import('./AvatarGroup.vue')['default']>
