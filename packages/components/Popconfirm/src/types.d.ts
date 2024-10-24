import type { PopoverProps } from '@lite-space/popover'

interface LtPopconfirmProps extends Pick<PopoverProps, 'placement'> {
  title: string
  description: string
  okText: string
  cancelText: string
  icon: string
  showCancel: boolean
  disabled: boolean
}

export type PopconfirmProps = Partial<LtPopconfirmProps>
export type PopconfirmInstance = InstanceType<typeof import('./Popconfirm.vue')['default']>
