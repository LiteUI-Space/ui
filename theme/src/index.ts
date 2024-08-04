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

      {
        'lt-input': 'inline-flex-center',
        'lt-input-wrapper': 'flex gap-1 items-center px-2 py-1 rounded-md lt-input-border lt-input--focus',
        'lt-input-inner': 'outline-none border-none text-sm w-full placeholder:text-zinc-400',
        'lt-input-border': 'border border-solid border-gray-200 transition ',

        'lt-input--full': 'w-full',
        // input hover
        'lt-input--hover': 'hover:border-gray-300',
        // input focus
        'lt-input--focus': 'focus-within:border-gray-500!',
        // input prefix
        'lt-input--prefix-suffix-icon': 'text-lg text-zinc-500',
        'lt-input--prefix-suffix': 'text-sm text-zinc-500',
        // input addon
        'lt-input--addon': 'lt-input-border px-2 py-1 bg-zinc-100',
        'lt-input--addon-text': 'text-sm text-zinc-500',
        // input addonBefore
        'lt-input--addonBefore': 'lt-input--addon border-r-none rounded-l-md',
        'lt-input-wrapper--addonBefore': 'rounded-l-none',
        // input addonAfter
        'lt-input--addonAfter': 'lt-input--addon border-l-none rounded-r-md',
        'lt-input-wrapper--addonAfter': 'rounded-r-none',
        // input disabled
        'lt-input--disabled': 'cursor-not-allowed bg-zinc-100',
        // input password
        'lt-input--password': 'tracking-wider',
        // inputPassowrd
        'lt-input-password': 'lt-input--prefix-suffix transition block cursor-pointer hover:text-zinc-600'
      },

      ['flex-center', 'flex items-center justify-center'],
      ['inline-flex-center', 'inline-flex items-center justify-center']

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
      'lt-button--icon-gap',
      'inline-flex-center'
    ]
  }
})
