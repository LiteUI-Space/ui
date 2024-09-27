const Avatar = {
  'lt-avatar': 'inline-flex-center align-middle overflow-hidden bg-gray-300 rounded-full text-sm text-white',

  'lt-avatar-large': 'w-40px h-40px',
  'lt-avatar-default': 'w-8 h-8',
  'lt-avatar-small': 'w-6 h-6',

  'lt-avatar-img': 'w-full h-full object-cover',
  'lt-avatar-icon': 'text-3xl scale-60'
}

const AvatarGroup = {
  'lt-avatar-group': 'inline-flex justify-center align-middle'
}

export const AvatarShortcuts = {
  ...Avatar,
  ...AvatarGroup
}
