import type { TooltipProps } from '@lite-space/tooltip'

interface LtPopconfirmProps extends Pick<TooltipProps, 'placement'> {
  title: string
  description: string
  okText: string
  cancelText: string
  icon: string
  showCancel: boolean
}

export type PopconfirmProps = Partial<LtPopconfirmProps>
export type PopconfirmInstance = InstanceType<typeof import('./Popconfirm.vue')['default']>
