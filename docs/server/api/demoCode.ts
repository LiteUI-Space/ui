import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const _dirname = fileURLToPath(new URL('../../', import.meta.url))
const getCompUrl = (compUrl: string) => path.join(_dirname, 'components/content', compUrl)

export default defineEventHandler(async event => {
  const query = getQuery<{ src: string }>(event)
  const code = await fs.readFile(getCompUrl(query.src), 'utf-8')
  return { code }
})
