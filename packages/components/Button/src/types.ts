import type { Button } from '.'

export interface ButtonProps {
  type: 'text' | 'link' | 'dashed' | 'primary' | 'default'
}

export type ButtonInstance = InstanceType<typeof Button>
