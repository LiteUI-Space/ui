interface TocChildren {
  title: string
  path: string
}

interface Toc {
  title: string
  children: TocChildren[]
}

export const toc: Toc[] = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Introduction',
        path: '/docs'
      },
      {
        title: 'Installation',
        path: '/docs/installation'
      }
    ]
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Button 按钮',
        path: '/docs/components/button'
      },
      {
        title: 'Breadcrumb 面包屑',
        path: '/docs/components/breadcrumb'
      },
      {
        title: 'Empty 空状态',
        path: '/docs/components/empty'
      },
      {
        title: 'Switch 开关',
        path: '/docs/components/switch'
      },
      {
        title: 'Tabs 标签页',
        path: '/docs/components/tabs'
      },
      {
        title: 'Tag 标签',
        path: '/docs/components/tag'
      },
      {
        title: 'Card 卡片',
        path: '/docs/components/card'
      },
      {
        title: 'Divider 分割线',
        path: '/docs/components/divider'
      },
      {
        title: 'Space 间距',
        path: '/docs/components/space'
      },
      {
        title: 'Input 输入框',
        path: '/docs/components/input'
      },
      {
        title: 'Radio 单选框',
        path: '/docs/components/radio'
      },
      {
        title: 'Checkbox 多选框',
        path: '/docs/components/checkbox'
      },
      {
        title: 'Menu 菜单',
        path: '/docs/components/menu'
      },
      {
        title: 'Badge 徽标数',
        path: '/docs/components/badge'
      },
      {
        title: 'Avatar 头像',
        path: '/docs/components/avatar'
      }
    ]
  }
]
