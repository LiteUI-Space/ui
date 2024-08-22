const Radio = {
  'lt-radio': 'inline-flex items-baseline cursor-pointer',
  'lt-radio-inner': 'inline-flex-center transition self-center box-border w-4 h-4 border border-solid border-gray-200 rounded-full',
  'lt-radio-icon': 'inline-flex w-6px h-6px bg-white rounded-full',
  'lt-radio-label': 'text-sm text-gray-900 mx-2',
  // radio checked
  'lt-radio-inner--checked': 'bg-black/85 border-black/85!',
  // radio disabled
  'lt-radio--disabled': 'cursor-not-allowed',
  'lt-radio-inner--disabled': 'bg-gray-200 border-gray-300!',
  'lt-radio-icon--disabled': 'bg-gray-400/75',
  'lt-radio-label--disabled': 'text-gray-400!'
}

const RadioGroup = {
  'lt-radio-group': 'inline-flex gap-2'
}

export const RadioShortcuts = {
  ...Radio,
  ...RadioGroup
}