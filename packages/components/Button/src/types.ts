import type { Button } from '.'

export interface ButtonProps {
  type?: 'text' | 'link' | 'primary' | 'default'
  disabled?: boolean
  danger?: boolean
  block?: boolean
  icon?: string
  iconPosition?: 'start' | 'end'
  circle?: boolean
  autoInsertSpace?: boolean
}

export type ButtonInstance = InstanceType<typeof Button>
