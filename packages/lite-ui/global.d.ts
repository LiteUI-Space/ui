export {}

declare module 'vue'{
  export interface GlobalComponents {
    Button: typeof import('@lite-space/button')['Button']
    Card: typeof import('@lite-space/card')['Card']
    Breadcrumb: typeof import('@lite-space/breadcrumb')['Breadcrumb']
    BreadcrumbItem: typeof import('@lite-space/breadcrumb')['BreadcrumbItem']
    Checkbox: typeof import('@lite-space/checkbox')['Checkbox']
    CheckboxGroup: typeof import('@lite-space/checkbox')['CheckboxGroup']
    Divider: typeof import('@lite-space/divider')['Divider']
    Empty: typeof import('@lite-space/empty')['Empty']
    IconArrowDown: typeof import('@lite-space/icon')['IconArrowDown']
    IconEmpty: typeof import('@lite-space/icon')['IconEmpty']
    IconUser: typeof import('@lite-space/icon')['IconUser']
    Input: typeof import('@lite-space/input')['Input']
    InputPassword: typeof import('@lite-space/input')['InputPassword']
    TextArea: typeof import('@lite-space/input')['TextArea']
    Menu: typeof import('@lite-space/menu')['Menu']
    MenuItem: typeof import('@lite-space/menu')['MenuItem']
    Radio: typeof import('@lite-space/radio')['Radio']
    RadioGroup: typeof import('@lite-space/radio')['RadioGroup']
    Space: typeof import('@lite-space/space')['Space']
    Switch: typeof import('@lite-space/switch')['Switch']
    Tabs: typeof import('@lite-space/tabs')['Tabs']
    TabPane: typeof import('@lite-space/tabs')['TabPane']
    Tag: typeof import('@lite-space/tag')['Tag']
    Badge: typeof import('@lite-space/badge')['badge']
    Avatar: typeof import('@lite-space/avatar')['Avatar']
    AvatarGroup: typeof import('@lite-space/avatar')['AvatarGroup']
    Popover: typeof import('@lite-space/popover')['Popover']
    Popconfirm: typeof import('@lite-space/popconfirm')['Popconfirm']
    Tooltip: typeof import('@lite-space/tooltip')['Tooltip']
    Select: typeof import('@lite-space/select')['Select']
    SelectOption: typeof import('@lite-space/select')['SelectOption']
    Dropdown: typeof import('@lite-space/dropdown')['Dropdown']
    DropdownItem: typeof import('@lite-space/dropdown')['DropdownItem']
  }
}
