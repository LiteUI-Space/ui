import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['components/index.ts'],
  clean: true,
  format: ['esm'],
  dts: true,
  minify: false
})
