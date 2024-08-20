const Checkbox = {
  'lt-checkbox': 'inline-flex items-baseline cursor-pointer select-none',
  'lt-checkbox-inner': 'inline-flex-center transition self-center box-border w-4 h-4 border border-solid border-gray-200 rounded',
  'lt-checkbox-indeterminate': 'bg-white/85 inline-flex w-2 h-2px',
  'lt-checkbox-iconchecked': 'text-white',
  'lt-checkbox-label': 'text-sm text-gray-900 mx-2',
  // checkbox checked
  'lt-checkbox-inner--checked': 'bg-black/85 border-black/85!',
  // checkbox disabled
  'lt-checkbox--disabled': 'cursor-not-allowed',
  'lt-checkbox-inner--disabled': 'bg-gray-200 border-gray-300!',
  'lt-checkbox-iconchecked--disabled': 'text-gray-400!',
  'lt-checkbox-label--disabled': 'text-gray-400!',
  'lt-checkbox-indeterminate--disabled': 'bg-gray-400!'
}

const CheckboxGroup = {
  'lt-checkbox-group': 'inline-flex gap-2'
}

export const CheckboxShortcuts = {
  ...Checkbox,
  ...CheckboxGroup
}
