<p align="center">
<a href="https://github.com/LiteUI-Space/ui"><img src="./assets/logo.svg" width="140"/></a>
</p>

<h1 align="center">
lite-space/ui
</h1>

<p align="center">
English | <a href="README-CN.md">中文</a>
</p>

<p align="center">
<a href="https://lite-spaceui.netlify.app">📚️ Documentation</a>
</p>

Based on the `unocss` component library `vue3` provides a concise set of components.

## Installation
```shell
pnpm add unocss -D
pnpm add @lite-space/ui
pnpm add @lite-space/theme
```

## configuration
```ts
// unocss.config.ts
import { presetLite } from '@lite-space/theme'
export default defineConfig({
  // ...
  presets: [
    // ...
    presetLite()
  ]
})
```

## Example
```vue
<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button />
</template>
```

## Contribution guide
If you encounter any problems during use, feel free to submit an [issue](https://github.com/AntzyMo/vue-day-calendar/issues) or **pull request**, and we will resolve it as soon as possible, if you like it, please **star** it.

## Thanks
- [unocss](https://unocss.dev/)
- [ikun-ui](https://ikun-ui.netlify.app/)
- [element-plus](https://element-plus.org/)
- [ant-design-vue](https://www.antdv.com/components/overview)
- [layui-vue](https://www.layui-vue.com/zh-CN/index)
- [shadcn/ui](https://ui.shadcn.com/)

## License
[MIT](./LICENSE) License &copy; 2024-PRESENT [AntzyMo](https://github.com/AntzyMo)
