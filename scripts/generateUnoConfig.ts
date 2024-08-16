import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const _dirname = fileURLToPath(new URL('../packages', import.meta.url))

async function write(baseUrl: string, fileName: string, fileConent: string) {
  const filePath = path.join(_dirname, baseUrl, fileName)
  return fs.writeFile(filePath, fileConent)
}

export async function writeUnoConfig() {
  const content = `// 自动生成
// 当前文件不需要提交，只用于开发组件时提供样式提示
`
  const unoFileName = 'unocss.config.ts'
  const files = await fs.readdir(path.join(_dirname, 'components'))
  if (!files.includes(unoFileName)) {
    write('components', unoFileName, content)
  }
}
