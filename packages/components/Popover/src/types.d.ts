import type { TooltipProps } from '@lite-space/tooltip'

interface LtPopoverProps extends TooltipProps {
  title: string
}

export type PopoverProps = Partial<LtPopoverProps>
export type PopoverInstance = InstanceType<typeof import('./Popover.vue')['default']>
