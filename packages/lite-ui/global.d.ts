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
  }
}
