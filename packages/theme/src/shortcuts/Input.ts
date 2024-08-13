const Input = {
  'lt-input': 'inline-flex-center',
  'lt-input-wrapper': 'flex w-full gap-1 items-center px-2 py-1 rounded-md lt-input-border lt-input--focus',
  'lt-input-inner': 'outline-none border-none text-sm w-full placeholder:text-zinc-400',
  'lt-input-border': 'border border-solid border-gray-200 transition ',

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
  // input clearable
  'lt-input--clearable': 'lt-input--prefix-suffix i-carbon:close-outline cursor-pointer hover:text-zinc-600 transition'

}

const InputPassowrd = {
  'lt-input-password': 'lt-input--prefix-suffix transition block cursor-pointer hover:text-zinc-600'
}

const TextArea = {
  'lt-textarea-wrapper': 'flex rounded-md lt-input-border lt-input--focus',
  'lt-textarea-inner': 'px-2 py-2 outline-none bg-transparent border-none flex-1 placeholder:text-zinc-400',
  'lt-textarea--resize': 'resize-none',
  // textArea hover
  'lt-textarea--hover': 'lt-input--hover',
  // textArea disabled
  'lt-textarea--disabled': 'lt-input--disabled'
}

export const InputShortcuts = {
  ...Input,
  ...InputPassowrd,
  ...TextArea
}
