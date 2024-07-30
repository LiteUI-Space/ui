import { definePreset } from 'unocss'

interface ThemeOptions {

}
export const presetLite = definePreset((options?: ThemeOptions) => {
  return {
    name: '@lite-ui/theme',
    shortcuts: [
      {
        'lt-button': 'px-2 py-1.5 flex-center bg-transparent border-none cursor-pointer rounded-md transition text-gray-900',
        // button type
        'lt-button--default': 'border border-solid border-gray-200 hover:bg-gray-50 active:bg-gray-100',
        'lt-button--text': 'hover:bg-gray-100/80 active:bg-gray-200/80',
        'lt-button--primary': 'bg-black/85 text-white hover:op-90 active:op-100',
        'lt-button--link': '',
        // button disabled
        'lt-button--disabled': 'cursor-not-allowed! opacity-50!',
        // button danger
        'lt-button--default-danger': 'text-rose-500 border-rose-500 hover:bg-red-100/60',
        'lt-button--text-danger': 'text-rose-500 hover:bg-red-100/60',
        'lt-button--primary-danger': 'bg-red-500 hover:bg-red-500/90',
        'lt-button--link-danger': 'text-rose-500 hover:text-rose-500/80',
        // button block
        'lt-button--block': 'block w-full',
        // button icon
        'lt-button--icon': 'text-base',
        'lt-button--icon-gap': 'gap-1.5',
        'lt-button--icon-end': 'flex-row-reverse',
        // button circle
        'lt-button--circle': 'rounded-full',
        'lt-button--two-cn-chars': 'tracking-2 indent-2'
      },

      ['flex-center', 'flex items-center justify-center']

    ],
    safelist: [
      'lt-button',
      'lt-button--default',
      'lt-button--primary',
      'lt-button--text',
      'lt-button--link',
      'lt-button--disabled',
      'lt-button--danger',
      'flex-center',
      'lt-button--default-danger',
      'lt-button--text-danger',
      'lt-button--primary-danger',
      'lt-button--link-danger',
      'lt-button--block',
      'lt-button--two-chinese-chars',
      'lt-button--icon-gap'
    ]
  }
})
