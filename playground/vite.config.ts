import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter(),

    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports
      ],
      dts: true
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dts: true
    }),

    /**
     * Docs: https://unocss.dev/integrations/vite
     * Interactive: https://unocss.dev/interactive
     */
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5174
  }
})
