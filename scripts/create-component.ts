import ora from 'ora'
import { $ } from 'execa'
import chalk from 'chalk'
import path from 'node:path'
import fs from 'node:fs/promises'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import liteuiPkg from '../packages/lite-ui/package.json'

const compName = process.argv[2]
const upperCaseCompName = compName.replace(compName[0], compName[0].toUpperCase())
const lowerCaseCompName = compName.replace(compName[0], compName[0].toLowerCase())

const _dirname = fileURLToPath(new URL('../packages', import.meta.url))
const pkgVersion = liteuiPkg.version
createComponent()

async function write(baseUrl: string, fileName: string, fileConent: string) {
  const filePath = path.join(_dirname, baseUrl, fileName)
  const [, shortFilePath] = filePath.split(/packages\\/)

  const spinner = ora(`createing file: ${shortFilePath}`).start()
  await fs.writeFile(filePath, fileConent)
  spinner.succeed(chalk.green(`file ${shortFilePath} created successfully.`))
}

async function createComponent() {
  const files = await fs.readdir(path.join(_dirname, 'components'))
  if (files.includes(upperCaseCompName)) {
    console.log(chalk.red(`${compName} already exists`))
    process.exit(1)
  } else {
    const compDirPath = `components/${upperCaseCompName}`
    const compSrcDirPath = `${compDirPath}/src`
    const themeShortcutsPath = 'theme/src/shortcuts'
    const themeShortcutsSrcPath = 'theme/src/shortcuts/src'

    await fs.mkdir(path.join(_dirname, compDirPath))
    await fs.mkdir(path.join(_dirname, compSrcDirPath))
    await Promise.all([
      writePkgJSON(compDirPath),
      writeTsConfig(compDirPath),
      writeTsConfig(compDirPath),
      writeIndex(compSrcDirPath),
      writeEntry(compSrcDirPath),
      writeDTs(compSrcDirPath),
      writeThemeShortcuts(themeShortcutsSrcPath),
      appendThemeShortcutsIndex(themeShortcutsPath),
      writeLiteuiIndex(),
      appendLiteuiDepToPkg()
    ])
    applyCommand()
  }
}

async function writePkgJSON(baseUrl: string) {
  const pkgContent = `{
  "name": "@lite-ui/${lowerCaseCompName}",
  "type": "module",
  "version": "${pkgVersion}",
  "keywords": [
    "vue3",
    "component",
    "unocss",
    "${lowerCaseCompName}"
  ],
  "publishConfig": {
    "access": "public",
    "main": "dist/index.mjs",
    "module": "dist/index.mjs",
    "types": "dist/index.d.ts"
  },
  "main": "src/index.ts",
  "module": "src/index.ts",
  "types": "src/index.ts",
  "files": [
    "README.md",
    "dist",
    "package.json"
  ],
  "scripts": {
    "build": "mkdist -d"
  },
  "devDependencies": {
    "@vue/tsconfig": "^0.5.1",
    "mkdist": "^1.5.4",
    "typescript": "^5.2.2",
    "vue": "^3.4.30"
  }
}
`
  return write(baseUrl, 'package.json', pkgContent)
}

async function writeTsConfig(baseUrl: string) {
  const tsConfigContent = `{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo"
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue"],
  "exclude": ["node_modules/*", "src/**/__test__/*"]
}
`
  return write(baseUrl, 'tsconfig.json', tsConfigContent)
}

async function writeIndex(baseUrl: string) {
  const indexContent = `export { default as ${upperCaseCompName} } from './${upperCaseCompName}.vue'
export type * from './types'
`
  return write(baseUrl, 'index.ts', indexContent)
}

async function writeEntry(baseUrl: string) {
  const entryContent = `<script setup lang="ts">
  import type { ${upperCaseCompName}Props } from './types'

  defineOptions({
    name: 'Lt${upperCaseCompName}'
  })

  defineProps<${upperCaseCompName}Props>()
</script>

<template>
</template>
`
  return write(baseUrl, `${upperCaseCompName}.vue`, entryContent)
}

async function writeDTs(baseUrl: string) {
  const dtsContent = `interface Lt${upperCaseCompName}Props {

}

export type ${upperCaseCompName}Props = Partial<Lt${upperCaseCompName}Props>
export type ${upperCaseCompName}Instance = InstanceType<typeof import('./${upperCaseCompName}.vue')['default']>
`
  return write(baseUrl, 'types.d.ts', dtsContent)
}

async function writeThemeShortcuts(baseUrl: string) {
  const themeShortcutsContent = `export const ${upperCaseCompName} = {
  'lt-${lowerCaseCompName}': ''
}
`
  return write(baseUrl, `${upperCaseCompName}.ts`, themeShortcutsContent)
}

async function appendThemeShortcutsIndex(baseUrl: string) {
  const file = await fs.readFile(path.join(_dirname, baseUrl, 'index.ts'), 'utf-8')
  const content = file.replace('export const shortcuts = [', `import { ${upperCaseCompName} } from './src/${upperCaseCompName}'\nexport const shortcuts = [`)
    .replace(']', `,${upperCaseCompName}]`)
  return write(baseUrl, 'index.ts', content)
}

async function writeLiteuiIndex() {
  const file = await fs.readFile(path.join(_dirname, 'lite-ui/src/index.ts'), 'utf-8')
  const content = `${file}export * from '@lite-ui/${lowerCaseCompName}'`
  return write('lite-ui/src', 'index.ts', content)
}
async function appendLiteuiDepToPkg() {
  const depName = `@lite-ui/${lowerCaseCompName}`
  const pkg = { ...liteuiPkg }

  if (!(depName in pkg.dependencies)) {
    Object.assign(pkg.dependencies, { [depName]: 'workspace:*' })
    return write('lite-ui', 'package.json', JSON.stringify(pkg, null, 2))
  }
}

async function applyCommand() {
  const spinners = ora('installing dependencies...').start()
  await $`pnpm i`.catch(err => {
    console.error(err)
    process.exit(1)
  })
  spinners.succeed(chalk.green('dependencies installed successfully.'))

  const lintSpinner = ora('linting...').start()
  await $`pnpm lint:comp:fix`.catch(err => {
    console.error(err)
    process.exit(1)
  })
  lintSpinner.succeed(chalk.green('linted successfully.'))
}
