import type { Button } from '.'

export interface ButtonProps {
  name: string
}

export type ButtonInstance = InstanceType<typeof Button>
