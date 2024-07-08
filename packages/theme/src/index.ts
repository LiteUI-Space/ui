import { definePreset } from 'unocss'

interface ThemeOptions {

}
export const presetLite = definePreset((options?: ThemeOptions) => {
  return {
    name: '@lite-ui/theme',
    shortcuts: [
      {
        'lt-button': 'px-2 py-1.5 bg-transparent border-none cursor-pointer rounded transition text-gray-900',
        // button type
        'lt-button--default': 'border border-solid border-gray-200 hover:bg-gray-50 active:bg-gray-100',
        'lt-button--text': 'hover:bg-gray-100/80 active:bg-gray-200/80',
        'lt-button--primary': 'bg-black/85 text-white hover:op-90 active:op-100',
        'lt-button--link': ''
      },

      ['flex-center', 'flex items-center justify-center']

    ],
    safelist: [
      'lt-btn',
      'lt-border',
      'lt-border-color',
      'lt-active-bg-color',
      'lt-transition',
      'lt-text-color',
      'lt-flex-center',
      'lt-hover-bg-color'
    ]
  }
})
