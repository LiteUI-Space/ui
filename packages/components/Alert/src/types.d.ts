interface LtAlertProps {
  icon: string
  message: string
  description: string
  closable: boolean
}

export type AlertProps = Partial<LtAlertProps>
export type AlertInstance = InstanceType<typeof import('./Alert.vue')['default']>
