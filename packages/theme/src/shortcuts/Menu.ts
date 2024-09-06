const Menu = {
  'lt-menu': 'cursor-pointer w-48 p-0 select-none'
}

const MenuItem = {
  'lt-menuItem': 'text-sm list-none flex gap-1  mb-1 items-center align-middle rounded-md',
  'lt-menuItem-other': 'hover:bg-gray-50 px-2 py-1',
  'lt-subMenuItem': 'flex-col justify-center items-start',
  'lt-subMenuItem-title': 'flex w-full box-border py-1 rounded-md items-center justify-between px-2 hover:bg-gray-50',
  'lt-subMenuItem-title-icon': 'inline-block mr-1.5 w-5 h-5',
  // menuItem active
  'lt-menuItem--active': 'bg-gray-100!'
}

export const MenuShortcuts = {
  ...Menu,
  ...MenuItem
}
