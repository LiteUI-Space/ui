import type { PopoverProps } from '@lite-space/popover'

interface LtTooltipProps extends PopoverProps {
  content: string
}

export type TooltipProps = Partial<LtTooltipProps>
export type TooltipInstance = InstanceType<typeof import('./Tooltip.vue')['default']>
