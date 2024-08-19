const Input = {
  'lt-input': 'inline-flex align-middle',
  'lt-input-wrapper': 'flex w-full flex-1 gap-1 px-2 py-1 items-center rounded-md lt-input-border lt-input--focus',
  'lt-input-inner': 'outline-none border-none  text-sm w-full placeholder:text-zinc-400',
  'lt-input-border': 'border border-solid border-gray-200 transition ',
  // input size
  'lt-input-small': 'h-7',
  'lt-input-default': 'h-8',
  'lt-input-large': 'h-9',

  // input hover
  'lt-input--hover': 'hover:border-gray-300',
  // input focus
  'lt-input--focus': 'focus-within:border-gray-500!',
  // input prefix
  'lt-input--prefix-suffix-icon': 'text-lg text-zinc-500',
  'lt-input--prefix-suffix': 'text-sm text-zinc-500',
  // input addon
  'lt-input--addon': 'flex-center lt-input-border px-2 py-1 bg-zinc-100',
  // input addon text size
  'lt-input--addon-text': 'text-zinc-500',
  'lt-input-default--addon-text': 'text-xs',
  'lt-input-small--addon-text': 'text-xs',
  'lt-input-large--addon-text': 'text-xs',

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
  // input clearable
  'lt-input--clearable': 'lt-input--prefix-suffix i-carbon:close-outline cursor-pointer hover:text-zinc-600 transition'

}

const InputPassowrd = {
  'lt-input-password': 'lt-input--prefix-suffix transition block cursor-pointer hover:text-zinc-600'
}

const TextArea = {
  'lt-textarea': 'inline-flex relative rounded-md lt-input-border lt-input--focus bg-white',
  'lt-textarea-inner': 'px-2 py-2 outline-none leading-5 border-none flex-1 placeholder:text-zinc-400 resize-y',
  // textArea size
  'lt-textarea-small': 'min-h-6',
  'lt-textarea-default': 'min-h-7',
  'lt-textarea-large': 'min-h-8',

  // textArea resize none
  'lt-textarea--resize-none': 'resize-none',
  // textArea hover
  'lt-textarea--hover': 'lt-input--hover',
  // textArea disabled
  'lt-textarea--disabled': 'lt-input--disabled',
  // textArea clearable
  'lt-textarea--clearable': 'lt-input--clearable absolute right-3 top-2.5 z-99'
}

export const InputShortcuts = {
  ...Input,
  ...InputPassowrd,
  ...TextArea
}
