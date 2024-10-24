interface LtPopoverProps {
  placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  trigger: 'hover' | 'click' | 'contextMenu'
  offset: number
  hideDelay: number
  contentClass: any
  contentStyle: CSSProperties
  disabled: boolean
}

export type PopoverProps = Partial<LtPopoverProps>
export type PopoverInstance = InstanceType<typeof import('./Popover.vue')['default']>
