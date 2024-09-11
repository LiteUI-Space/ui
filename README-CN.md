<p align="center">
<a href="https://github.com/LiteUI-Space/ui"><img src="./assets/logo.svg" width="140"/></a>
</p>

<h1 align="center">
lite-space/ui
</h1>

<p align="center">
<a href="https://github.com/LiteUI-Space/ui">English</a> | 中文
</p>

<p align="center">
<a href="https://lite-spaceui.netlify.app">📚️ 文档</a>
</p>

基于 `unocss` 的 `vue3` 组件库，提供了一套简洁的组件。

## 安装
```shell
pnpm add unocss -D
pnpm add @lite-space/ui
pnpm add @lite-space/theme
```

## 配置
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

## 例子
```vue
<script setup lang="ts">
  import { Button } from '@lite-space/ui'
</script>

<template>
  <Button />
</template>
```

## 贡献指南
如果在使用过程中发现问题，欢迎提交 [issue](https://github.com/AntzyMo/vue-day-calendar/issues) 或 **pull request** 并第一时间解决，如果喜欢的话，欢迎 **star** 一下。

## License
[MIT](./LICENSE) License &copy; 2024-PRESENT [AntzyMo](https://github.com/AntzyMo)
