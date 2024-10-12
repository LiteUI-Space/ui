interface LtTooltipProps {
  placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  content: string
  trigger: 'hover' | 'click'
  offset: number
}

export type TooltipProps = Partial<LtTooltipProps>
export type TooltipInstance = InstanceType<typeof import('./Tooltip.vue')['default']>
